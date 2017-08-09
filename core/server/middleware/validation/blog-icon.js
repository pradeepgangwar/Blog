var errors = require('../../errors'),
    config = require('../../config'),
    Promise = require('bluebird'),
    sizeOf = require('image-size'),
    i18n = require('../../i18n'),
    blogIconUtils = require('../../utils/blog-icon'),
    validIconSize,
    getIconDimensions;

validIconSize = function validIconSize(size) {
    return size / 1024 <= 100 ? true : false;
};

getIconDimensions = function getIconDimensions(icon) {
    return new Promise(function getImageSize(resolve, reject) {
        if (blogIconUtils.isIcoImageType(icon.name)) {
            blogIconUtils.getIconDimensions(icon.path).then(function (response) {
                return resolve({
                    width: response.width,
                    height: response.height
                });
            }).catch(function (err) {
                return reject(err);
            });
        } else {
            sizeOf(icon.path, function (err, response) {
                if (err) {
                    return reject(new errors.ValidationError({message: i18n.t('errors.api.icons.couldNotGetSize', {file: icon.name, error: err.message})}));
                }

                return resolve({
                    width: response.width,
                    height: response.height
                });
            });
        }
    });
};

module.exports = function blogIcon() {
    // we checked for a valid image file, now we need to do validations for blog icons
    return function blogIconValidation(req, res, next) {
        var iconExtensions = (config.get('uploads').icons && config.get('uploads').icons.extensions) || [];

        // CASE: file should not be larger than 100kb
        if (!validIconSize(req.file.size)) {
            return next(new errors.ValidationError({message: i18n.t('errors.api.icons.invalidFile', {extensions: iconExtensions})}));
        }

        return getIconDimensions(req.file).then(function (response) {
            // save the image dimensions in new property for file
            req.file.dimensions = response;

            // CASE: file needs to be a square
            if (req.file.dimensions.width !== req.file.dimensions.height) {
                return next(new errors.ValidationError({message: i18n.t('errors.api.icons.invalidFile', {extensions: iconExtensions})}));
            }

            // CASE: icon needs to be bigger than or equal to 60px
            // .ico files can contain multiple sizes, we need at least a minimum of 60px (16px is ok, as long as 60px are present as well)
            if (req.file.dimensions.width < 60) {
                return next(new errors.ValidationError({message: i18n.t('errors.api.icons.invalidFile', {extensions: iconExtensions})}));
            }

            // CASE: icon needs to be smaller than or equal to 1000px
            if (req.file.dimensions.width > 1000) {
                return next(new errors.ValidationError({message: i18n.t('errors.api.icons.invalidFile', {extensions: iconExtensions})}));
            }

            next();
        }).catch(function (err) {
            next(err);
        });
    };
};
