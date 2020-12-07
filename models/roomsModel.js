const mongoose = require('mongoose');
const validator = require('validator');

const roomsSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        //required: [true, 'Please enter a name.']
    },
    nombre: {
        type: String,
        trim: true,
        unique: true,
        //required: [true, 'Debes escribir un nombre']
    },
    price: {
        type: Number,
        //required: [true, 'Please enter a price.']
    },
    sleeps: {
        type: Number,
        //required: [true, 'Please enter the number of beds available.']
    },
    imageCover: {
        type: String,
        default: 'casa_coji_main_2.jpg'
    },
    images: [String], // Specifies an array of strings
    summary: {
        type: String,
        trim: true,
        //required: [true, 'Please enter a summary for the room.']
    },
    sumario: {
        type: String,
        trim: true,
        //required: [true, 'Debes escribir un sumario por la habitacion.']
    },
    description: {
        type: String,
        trim: true
    },
    descripción: {
        type: String,
        trim: true
    }
});

const Rooms = mongoose.model('Rooms', roomsSchema);

module.exports = Rooms;
