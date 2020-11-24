const Rooms = require('../models/roomsModel');
const Food = require('../models/foodModel');
const Equipment = require('../models/equipmentModel');
const catchAsync = require('../utils/catchAsync');

exports.getHome = (req, res, next) => {
    res.status(200).render('home', {
        title: 'Home'
    });
};

exports.getRestaurant = catchAsync(async (req, res, next) => {
    const food = await Food.find();

    res.status(200).render('restaurant', {
        title: 'Restaurant',
        food 
    });
});

exports.getAccommodation = catchAsync(async (req, res, next) => {
    const rooms = await Rooms.find();
    console.log(rooms);

    res.status(200).render('accommodation', {
        title: 'Accommodation',
        rooms 
    });
});

exports.getClimbing = catchAsync(async (req, res, next) => {
    res.status(200).render('climbing', {
        title: 'Climbing in Coji',
    });
});

exports.getEquipment = catchAsync(async (req, res, next) => {
    const equipment = await Equipment.find();
    console.log(equipment);

    res.status(200).render('equipment', {
        title: 'Rent Equipment',
        equipment
    });
});