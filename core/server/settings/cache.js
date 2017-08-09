// It's important to keep the requires absolutely minimal here,
// As this cache is used in SO many other areas, we may open ourselves to
// circular dependency bugs.
var debug = require('debug')('ghost:settings:cache'),
    _ = require('lodash'),
    events = require('../events'),
    /**
     * ## Cache
     * Holds cached settings
     * Keyed by setting.key
     * Contains the JSON version of the model
     * @type {{}} - object of objects
     */
    settingsCache = {};

/**
 *
 * IMPORTANT:
 * We store settings with a type and a key in the database.
 *
 * {
 *   type: core
 *   key: db_hash
 *   value: ...
 * }
 *
 * But the settings cache does not allow requesting a value by type, only by key.
 * e.g. settingsCache.get('db_hash')
 */
module.exports = {
    /**
     * Get a key from the settingsCache
     * Will resolve to the value, including parsing JSON, unless {resolve: false} is passed in as an option
     * In which case the full JSON version of the model will be resolved
     *
     * @param {string} key
     * @param {object} options
     * @return {*}
     */
    get: function get(key, options) {
        if (!settingsCache[key]) {
            return;
        }

        // Don't try to resolve to the value of the setting
        if (options && options.resolve === false) {
            return settingsCache[key];
        }

        // Default behaviour is to try to resolve the value and return that
        try {
            // CASE: if a string contains a number e.g. "1", JSON.parse will auto convert into integer
            if (settingsCache[key].value.match(/^\d+$/)) {
                return settingsCache[key].value;
            }

            return JSON.parse(settingsCache[key].value);
        } catch (err) {
            return settingsCache[key].value;
        }
    },
    /**
     * Set a key on the cache
     * The only way to get an object into the cache
     * Uses clone to prevent modifications from being reflected
     * @param {string} key
     * @param {object} value json version of settings model
     */
    set: function set(key, value) {
        settingsCache[key] = _.cloneDeep(value);
    },
    /**
     * Get the entire cache object
     * Uses clone to prevent modifications from being reflected
     * @return {{}} cache
     */
    getAll: function getAll() {
        return _.cloneDeep(settingsCache);
    },
    /**
     * Initialise the cache
     *
     * Optionally takes a collection of settings & can populate the cache with these.
     *
     * @param {Bookshelf.Collection<Settings>} [settingsCollection]
     * @return {{}}
     */
    init: function init(settingsCollection) {
        var self = this;

        // Local function, only ever used for initialising
        // We deliberately call "set" on each model so that set is a consistent interface
        function updateSettingFromModel(settingModel) {
            debug('Auto updating', settingModel.get('key'));
            self.set(settingModel.get('key'), settingModel.toJSON());
        }

        // First, reset the cache
        settingsCache = {};

        // // if we have been passed a collection of settings, use this to populate the cache
        if (settingsCollection && settingsCollection.models) {
            _.each(settingsCollection.models, updateSettingFromModel);
        }

        // Bind to events to automatically keep up-to-date
        events.on('settings.edited', updateSettingFromModel);
        events.on('settings.added', updateSettingFromModel);
        events.on('settings.deleted', updateSettingFromModel);

        return settingsCache;
    }
};
