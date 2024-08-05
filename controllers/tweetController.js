// controllers/tweetController.js
const Tweet = require('../models/Tweet');

exports.createTweet = async (req, res) => {
    const { text } = req.body;
    const userId = req.user._id;

    try {
        const tweet = await Tweet.create({ userId, text });
        res.status(201).json(tweet);
    } catch (error) {
        res.status(400).json({ message: 'Tweet creation failed' });
    }
};

exports.getUserTimeline = async (req, res) => {
    const { userId } = req.params;

    try {
        const tweets = await Tweet.find({ userId }).sort({ createdAt: -1 });
        res.json(tweets);
    } catch (error) {
        res.status(400).json({ message: 'Failed to fetch timeline' });
    }
};
