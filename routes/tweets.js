// routes/tweets.js
const express = require('express');
const { createTweet, getUserTimeline } = require('../controllers/tweetController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, createTweet);
router.get('/:userId/timeline', protect, getUserTimeline);

module.exports = router;
