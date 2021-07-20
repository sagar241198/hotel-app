const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({

    user: { type: mongoose.Schema.Types.ObjectId, require: true },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    number: {
        type: String,
        require: true
    },
    RoomSuit: {
        type: String,
        require: true
    },
    Bed: {
        type: String,
        require: true
    },
    CheckIn: {
        type: String,
        require: true
    },
    CheckOut: {
        type: String,
        require: true
    }
}, { timestamp: true });

const newBooking = mongoose.model('Booking', BookingSchema);
module.exports = newBooking;