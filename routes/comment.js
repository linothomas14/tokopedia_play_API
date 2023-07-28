const express = require('express');
const router = express.Router();

const commentController = require('../controllers/comment');

router.post('/comments', commentController.create);
router.get('/videos/:video_id/comments', commentController.findByVideoId);
router.get('/comments/:id', commentController.findById);
router.get('/comments', commentController.findAll);

module.exports = router;