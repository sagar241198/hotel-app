const mongoose = require('mongoose');

const ReviewsSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId , require: true },
    name: {
        type: String,
        require: true
    },
    review: {
        type: String,
        require: true
    }
   
}, { timestamp: true });

const newReviews = mongoose.model('review', ReviewsSchema);
module.exports = newReviews;