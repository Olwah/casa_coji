const mongoose = require('mongoose');
const validator = require('validator');

const coursesSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Please enter a name.']
    },
    nombre: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Debes escribir un nombre']
    },
    price: {
        type: Number,
        required: [true, 'Please enter a price.']
    },
    isCourse: {
        type: Boolean,
        required: [
            true,
            'Please indicate whether the entry is a course (true) or activity (false)'
        ]
    },
    imageCover: {
        type: String,
        default: 'casa_coji_main_2.jpg'
    },
    summary: {
        type: String,
        trim: true
    },
    sumario: {
        type: String,
        trim: true
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

const Courses = mongoose.model('Courses', coursesSchema);

module.exports = Courses;
