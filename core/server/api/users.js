// # Users API
// RESTful API for the User resource
var Promise         = require('bluebird'),
    _               = require('lodash'),
    dataProvider    = require('../models'),
    canThis         = require('../permissions').canThis,
    errors          = require('../errors'),
    events          = require('../events'),
    utils           = require('./utils'),
    pipeline        = require('../utils/pipeline'),
    i18n            = require('../i18n'),
    docName         = 'users',
    // TODO: implement created_by, updated_by
    allowedIncludes = ['count.posts', 'permissions', 'roles', 'roles.permissions'],
    users;

/**
 * ### Users API Methods
 *
 * **See:** [API Methods](index.js.html#api%20methods)
 */
users = {
    /**
     * ## Browse
     * Fetch all users
     * @param {{context}} options (optional)
     * @returns {Promise<Users>} Users Collection
     */
    browse: function browse(options) {
        var extraOptions = ['status'],
            permittedOptions = utils.browseDefaultOptions.concat(extraOptions),
            tasks;

        /**
         * ### Model Query
         * Make the call to the Model layer
         * @param {Object} options
         * @returns {Object} options
         */
        function doQuery(options) {
            return dataProvider.User.findPage(options);
        }

        // Push all of our tasks into a `tasks` array in the correct order
        tasks = [
            utils.validate(docName, {opts: permittedOptions}),
            utils.handlePublicPermissions(docName, 'browse'),
            utils.convertOptions(allowedIncludes),
            doQuery
        ];

        // Pipeline calls each task passing the result of one to be the arguments for the next
        return pipeline(tasks, options);
    },

    /**
     * ## Read
     * @param {{id, context}} options
     * @returns {Promise<Users>} User
     */
    read: function read(options) {
        var attrs = ['id', 'slug', 'status', 'email', 'role'],
            tasks,
            isMe = options.id === 'me';

        // Special handling for /users/me request
        if (isMe && options.context && options.context.user) {
            options.id = options.context.user;
        }

        /**
         * ### Model Query
         * Make the call to the Model layer
         * @param {Object} options
         * @returns {Object} options
         */
        function doQuery(options) {
            return dataProvider.User.findOne(options.data, _.omit(options, ['data']));
        }

        // Push all of our tasks into a `tasks` array in the correct order
        tasks = [
            utils.validate(docName, {attrs: attrs}),
            utils.handlePublicPermissions(docName, 'read'),
            utils.convertOptions(allowedIncludes),
            doQuery
        ];

        // Pipeline calls each task passing the result of one to be the arguments for the next
        return pipeline(tasks, options).then(function formatResponse(result) {
            if (result) {
                if (isMe) {
                    events.emit('read:users:me', result);
                }

                return {users: [result.toJSON(options)]};
            }

            return Promise.reject(new errors.NotFoundError({message: i18n.t('errors.api.users.userNotFound')}));
        });
    },

    /**
     * ## Edit
     * @param {User} object the user details to edit
     * @param {{id, context}} options
     * @returns {Promise<User>}
     */
    edit: function edit(object, options) {
        var extraOptions = ['editRoles'],
            permittedOptions = extraOptions.concat(utils.idDefaultOptions),
            tasks;

        if (object.users && object.users[0] && object.users[0].roles && object.users[0].roles[0]) {
            options.editRoles = true;
        }

        // The password should never be set via this endpoint, if it is passed, ignore it
        if (object.users && object.users[0] && object.users[0].password) {
            delete object.users[0].password;
        }

        /**
         * ### Handle Permissions
         * We need to be an authorised user to perform this action
         * Edit user allows the related role object to be updated as well, with some rules:
         * - No change permitted to the role of the owner
         * - no change permitted to the role of the context user (user making the request)
         * @param {Object} options
         * @returns {Object} options
         */
        function handlePermissions(options) {
            if (options.id === 'me' && options.context && options.context.user) {
                options.id = options.context.user;
            }

            return canThis(options.context).edit.user(options.id).then(function () {
                // CASE: can't edit my own status to inactive or locked
                if (options.id === options.context.user) {
                    if (dataProvider.User.inactiveStates.indexOf(options.data.users[0].status) !== -1) {
                        return Promise.reject(new errors.NoPermissionError({
                            message: i18n.t('errors.api.users.cannotChangeStatus')
                        }));
                    }
                }

                // CASE: if roles aren't in the payload, proceed with the edit
                if (!(options.data.users[0].roles && options.data.users[0].roles[0])) {
                    return options;
                }

                // @TODO move role permissions out of here
                var role = options.data.users[0].roles[0],
                    roleId = role.id || role,
                    editedUserId = options.id;

                return dataProvider.User.findOne(
                    {id: options.context.user, status: 'all'}, {include: ['roles']}
                ).then(function (contextUser) {
                    var contextRoleId = contextUser.related('roles').toJSON(options)[0].id;

                    if (roleId !== contextRoleId && editedUserId === contextUser.id) {
                        return Promise.reject(new errors.NoPermissionError({
                            message: i18n.t('errors.api.users.cannotChangeOwnRole')
                        }));
                    }

                    return dataProvider.User.findOne({role: 'Owner'}).then(function (owner) {
                        if (contextUser.id !== owner.id) {
                            if (editedUserId === owner.id) {
                                if (owner.related('roles').at(0).id !== roleId) {
                                    return Promise.reject(new errors.NoPermissionError({
                                        message: i18n.t('errors.api.users.cannotChangeOwnersRole')
                                    }));
                                }
                            } else if (roleId !== contextRoleId) {
                                return canThis(options.context).assign.role(role).then(function () {
                                    return options;
                                });
                            }
                        }

                        return options;
                    });
                });
            }).catch(function handleError(err) {
                return Promise.reject(new errors.NoPermissionError({
                    err: err,
                    context: i18n.t('errors.api.users.noPermissionToEditUser')
                }));
            });
        }

        /**
         * ### Model Query
         * Make the call to the Model layer
         * @param {Object} options
         * @returns {Object} options
         */
        function doQuery(options) {
            return dataProvider.User.edit(options.data.users[0], _.omit(options, ['data']));
        }

        // Push all of our tasks into a `tasks` array in the correct order
        tasks = [
            utils.validate(docName, {opts: permittedOptions}),
            handlePermissions,
            utils.convertOptions(allowedIncludes),
            doQuery
        ];

        return pipeline(tasks, object, options).then(function formatResponse(result) {
            if (result) {
                return {users: [result.toJSON(options)]};
            }

            return Promise.reject(new errors.NotFoundError({message: i18n.t('errors.api.users.userNotFound')}));
        });
    },

    /**
     * ## Destroy
     * @param {{id, context}} options
     * @returns {Promise}
     */
    destroy: function destroy(options) {
        var tasks;

        /**
         * ### Handle Permissions
         * We need to be an authorised user to perform this action
         * @param {Object} options
         * @returns {Object} options
         */
        function handlePermissions(options) {
            return canThis(options.context).destroy.user(options.id).then(function permissionGranted() {
                options.status = 'all';
                return options;
            }).catch(function handleError(err) {
                return Promise.reject(new errors.NoPermissionError({
                    err: err,
                    context: i18n.t('errors.api.users.noPermissionToDestroyUser')
                }));
            });
        }

        /**
         * ### Delete User
         * Make the call to the Model layer
         * @param {Object} options
         */
        function deleteUser(options) {
            return dataProvider.Base.transaction(function (t) {
                options.transacting = t;

                return Promise.all([
                    dataProvider.Accesstoken.destroyByUser(options),
                    dataProvider.Refreshtoken.destroyByUser(options),
                    dataProvider.Post.destroyByAuthor(options)
                ]).then(function () {
                    return dataProvider.User.destroy(options);
                }).return(null);
            }).catch(function (err) {
                return Promise.reject(new errors.NoPermissionError({
                    err: err
                }));
            });
        }

        // Push all of our tasks into a `tasks` array in the correct order
        tasks = [
            utils.validate(docName, {opts: utils.idDefaultOptions}),
            handlePermissions,
            utils.convertOptions(allowedIncludes),
            deleteUser
        ];

        // Pipeline calls each task passing the result of one to be the arguments for the next
        return pipeline(tasks, options);
    },

    /**
     * ## Change Password
     * @param {password} object
     * @param {{context}} options
     * @returns {Promise<password>} success message
     */
    changePassword: function changePassword(object, options) {
        var tasks;

        function validateRequest() {
            return utils.validate('password')(object, options)
                .then(function (options) {
                    var data = options.data.password[0];

                    if (data.newPassword !== data.ne2Password) {
                        return Promise.reject(new errors.ValidationError({
                            message: i18n.t('errors.models.user.newPasswordsDoNotMatch')
                        }));
                    }

                    return Promise.resolve(options);
                });
        }

        /**
         * ### Handle Permissions
         * We need to be an authorised user to perform this action
         * @param {Object} options
         * @returns {Object} options
         */
        function handlePermissions(options) {
            return canThis(options.context).edit.user(options.data.password[0].user_id).then(function permissionGranted() {
                return options;
            }).catch(function (err) {
                return Promise.reject(new errors.NoPermissionError({
                    err: err,
                    context: i18n.t('errors.api.users.noPermissionToChangeUsersPwd')
                }));
            });
        }

        /**
         * ### Model Query
         * Make the call to the Model layer
         * @param {Object} options
         * @returns {Object} options
         */
        function doQuery(options) {
            return dataProvider.User.changePassword(
                options.data.password[0],
                _.omit(options, ['data'])
            );
        }

        // Push all of our tasks into a `tasks` array in the correct order
        tasks = [
            validateRequest,
            handlePermissions,
            utils.convertOptions(allowedIncludes),
            doQuery
        ];

        // Pipeline calls each task passing the result of one to be the arguments for the next
        return pipeline(tasks, object, options).then(function formatResponse() {
            return Promise.resolve({password: [{message: i18n.t('notices.api.users.pwdChangedSuccessfully')}]});
        });
    },

    /**
     * ## Transfer Ownership
     * @param {owner} object
     * @param {Object} options
     * @returns {Promise<User>}
     */
    transferOwnership: function transferOwnership(object, options) {
        var tasks;

        /**
         * ### Handle Permissions
         * We need to be an authorised user to perform this action
         * @param {Object} options
         * @returns {Object} options
         */
        function handlePermissions(options) {
            return dataProvider.Role.findOne({name: 'Owner'}).then(function (ownerRole) {
                return canThis(options.context).assign.role(ownerRole);
            }).then(function () {
                return options;
            });
        }

        /**
         * ### Model Query
         * Make the call to the Model layer
         * @param {Object} options
         * @returns {Object} options
         */
        function doQuery(options) {
            return dataProvider.User.transferOwnership(options.data.owner[0], _.omit(options, ['data']));
        }

        // Push all of our tasks into a `tasks` array in the correct order
        tasks = [
            utils.validate('owner'),
            handlePermissions,
            utils.convertOptions(allowedIncludes),
            doQuery
        ];

        // Pipeline calls each task passing the result of one to be the arguments for the next
        return pipeline(tasks, object, options).then(function formatResult(result) {
            return Promise.resolve({users: result});
        });
    }
};

module.exports = users;
