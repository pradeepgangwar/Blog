var _               = require('lodash'),
    http            = require('http'),
    xml             = require('xml'),
    config          = require('../../config'),
    utils           = require('../../utils'),
    errors          = require('../../errors'),
    logging         = require('../../logging'),
    events          = require('../../events'),
    i18n            = require('../../i18n'),
    pingList;

// ToDo: Make this configurable
pingList = [{
    host: 'blogsearch.google.com',
    path: '/ping/RPC2'
}, {
    host: 'rpc.pingomatic.com',
    path: '/'
}];

function ping(post) {
    var pingXML,
        title = post.title,
        url = utils.url.urlFor('post', {post: post}, true),
        defaultPostSlugs = [
            'welcome',
            'the-editor',
            'using-tags',
            'managing-users',
            'private-sites',
            'advanced-markdown',
            'themes'
        ];

    if (post.page || config.isPrivacyDisabled('useRpcPing')) {
        return;
    }

    // Don't ping for the default posts.
    // This also handles the case where during ghost's first run
    // models.init() inserts this post but permissions.init() hasn't
    // (can't) run yet.
    if (defaultPostSlugs.indexOf(post.slug) > -1) {
        return;
    }

    // Build XML object.
    pingXML = xml({
        methodCall: [{
            methodName: 'weblogUpdate.ping'
        }, {
            params: [{
                param: [{
                    value: [{
                        string: title
                    }]
                }]
            }, {
                param: [{
                    value: [{
                        string: url
                    }]
                }]
            }]
        }]
    }, {declaration: true});

    // Ping each of the defined services.
    _.each(pingList, function (pingHost) {
        var options = {
                hostname: pingHost.host,
                path: pingHost.path,
                method: 'POST'
            },
            req;

        req = http.request(options);
        req.write(pingXML);

        req.on('error', function handleError(err) {
            logging.error(new errors.GhostError({
                err: err,
                message: err.message,
                context: i18n.t('errors.data.xml.xmlrpc.pingUpdateFailed.error'),
                help: i18n.t('errors.data.xml.xmlrpc.pingUpdateFailed.help', {url: 'http://docs.ghost.org'})
            }));
        });

        req.end();
    });
}

function listener(model) {
    ping(model.toJSON());
}

function listen() {
    events.on('post.published', listener);
}

module.exports = {
    listen: listen
};
