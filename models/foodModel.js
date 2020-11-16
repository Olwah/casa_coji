const mongoose = require('mongoose');
const validator = require('validator');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        required: [true, 'Please enter a name.']
    },
    price: {
        type: Number,
        required: [true, 'Please enter a price.']
    },
    priceHalfPortion: {
        type: Number
    },
    image: {
        type: String,
        default: 'food_placeholder.png'
    },
    summary: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    }
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;