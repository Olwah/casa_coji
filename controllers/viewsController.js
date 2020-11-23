const Rooms = require('../models/roomsModel');
const Food = require('../models/foodModel');
const catchAsync = require('../utils/catchAsync');

exports.getHome = (req, res, next) => {
    res.status(200).render('home', {
        title: 'Home'
    });
};

exports.getFood = catchAsync(async (req, res, next) => {
    const food = await Food.find();

    res.status(200).render('food', {
        title: 'Food',
        food 
    });
});

exports.getRooms = catchAsync(async (req, res, next) => {
    const rooms = await Rooms.find();

    res.status(200).render('rooms', {
        title: 'Rooms',
        rooms 
    });
});