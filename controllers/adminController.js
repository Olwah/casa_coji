const multer = require('multer'); // Used for uploading files
const sharp = require('sharp'); // Image processing library
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
const AppError = require('../utils/appError');
const Rooms = require('../models/roomsModel');

exports.createAccomodation = factory.createOne(Rooms);

/**** IMAGE PROCESSING ****/
// Keep the image in memory rather than save it to disk immediately
const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(
            new AppError('Not an image! Please only upload image files.', 400),
            false
        );
    }
};

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});
// 'photo' is the name of the field in the form
exports.uploadPhoto = upload.single('photo');

exports.resizePhoto = catchAsync(async (req, res, next) => {
    if (!req.file) return next();

    req.file.filename = `${req.name}-${Date.now()}.jpeg`;

    await sharp(req.file.buffer)
        .resize(500, 500)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`./public/img/${req.file.filename}`);

    next();
});