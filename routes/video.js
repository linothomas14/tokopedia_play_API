const express = require('express');
const router = express.Router();

const videoController = require('../controllers/video');

router.post('/videos', videoController.create);
router.get('/videos/:id', videoController.findById);
router.get('/videos', videoController.findAll);

module.exports = router;