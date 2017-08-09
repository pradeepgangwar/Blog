// # Backup Database
// Provides for backing up the database before making potentially destructive changes
var fs       = require('fs'),
    path     = require('path'),
    Promise  = require('bluebird'),
    config   = require('../../config'),
    logging  = require('../../logging'),
    utils    = require('../../utils'),
    exporter = require('../export'),

    writeExportFile,
    backup;

writeExportFile = function writeExportFile(exportResult) {
    var filename = path.resolve(utils.url.urlJoin(config.get('paths').contentPath, 'data', exportResult.filename));

    return Promise.promisify(fs.writeFile)(filename, JSON.stringify(exportResult.data)).return(filename);
};

/**
 * ## Backup
 * does an export, and stores this in a local file
 * @returns {Promise<*>}
 */
backup = function backup(options) {
    logging.info('Creating database backup');
    options = options || {};

    var props = {
        data: exporter.doExport(options),
        filename: exporter.fileName(options)
    };

    return Promise.props(props)
        .then(writeExportFile)
        .then(function successMessage(filename) {
            logging.info('Database backup written to: ' + filename);
        });
};

module.exports = backup;
