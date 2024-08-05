// models/Tweet.js
const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    text: {
        type: String,
        required: true,
        maxlength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Tweet = mongoose.model('Tweet', TweetSchema);
module.exports = Tweet;
