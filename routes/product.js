const express = require('express');
const router = express.Router();

const productController = require('../controllers/product');

router.post('/products', productController.create);
router.get('/products/:id', productController.findById);
router.get('/videos/:video_id/products', productController.findByVideoId);
router.get('/products', productController.findAll);

module.exports = router;