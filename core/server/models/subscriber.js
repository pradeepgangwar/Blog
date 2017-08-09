var ghostBookshelf = require('./base'),
    errors = require('../errors'),
    events = require('../events'),
    i18n = require('../i18n'),
    Promise = require('bluebird'),
    Subscriber,
    Subscribers;

Subscriber = ghostBookshelf.Model.extend({
    tableName: 'subscribers',

    emitChange: function emitChange(event) {
        events.emit('subscriber' + '.' + event, this);
    },

    defaults: function defaults() {
        return {
            status: 'subscribed'
        };
    },

    onCreated: function onCreated(model) {
        model.emitChange('added');
    },

    onUpdated: function onUpdated(model) {
        model.emitChange('edited');
    },

    onDestroyed: function onDestroyed(model) {
        model.emitChange('deleted');
    }
}, {

    orderDefaultOptions: function orderDefaultOptions() {
        return {};
    },
    /**
     * @deprecated in favour of filter
     */
    processOptions: function processOptions(options) {
        return options;
    },

    permittedOptions: function permittedOptions(methodName) {
        var options = ghostBookshelf.Model.permittedOptions(),

            // whitelists for the `options` hash argument on methods, by method name.
            // these are the only options that can be passed to Bookshelf / Knex.
            validOptions = {
                findPage: ['page', 'limit', 'columns', 'filter', 'order'],
                findAll: ['columns']
            };

        if (validOptions[methodName]) {
            options = options.concat(validOptions[methodName]);
        }

        return options;
    },

    permissible: function permissible(postModelOrId, action, context, loadedPermissions, hasUserPermission, hasAppPermission) {
        // CASE: external is only allowed to add and edit subscribers
        if (context.external) {
            if (['add', 'edit'].indexOf(action) !== -1) {
                return Promise.resolve();
            }
        }

        if (hasUserPermission && hasAppPermission) {
            return Promise.resolve();
        }

        return Promise.reject(new errors.NoPermissionError({message: i18n.t('errors.models.subscriber.notEnoughPermission')}));
    },

    // TODO: This is a copy paste of models/user.js!
    getByEmail: function getByEmail(email, options) {
        options = options || {};
        options.require = true;

        return Subscribers.forge(options).fetch(options).then(function then(subscribers) {
            var subscriberWithEmail = subscribers.find(function findSubscriber(subscriber) {
                return subscriber.get('email').toLowerCase() === email.toLowerCase();
            });

            if (subscriberWithEmail) {
                return subscriberWithEmail;
            }
        }).catch(function (error) {
            if (error.message === 'NotFound' || error.message === 'EmptyResponse') {
                return Promise.resolve();
            }

            return Promise.reject(error);
        });
    }
});

Subscribers = ghostBookshelf.Collection.extend({
    model: Subscriber
});

module.exports = {
    Subscriber: ghostBookshelf.model('Subscriber', Subscriber),
    Subscribers: ghostBookshelf.collection('Subscriber', Subscribers)
};
