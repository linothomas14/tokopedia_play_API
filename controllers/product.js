const productService = require('../services/product');
const mongoose = require('mongoose');
const create = async (req, res) => {
    try {

        const {
            title,
            product_url,
            price, video_id
        } = req.body;

        if (!title || !price || !product_url || !video_id) {
            throw new Error("Insufficient Parameter")
        }

        if (!mongoose.Types.ObjectId.isValid(video_id)) {
            throw new Error(`$video_id {id} is not a ObjectId format in Mongo`);
        }

        let productCreate = {
            title: title,
            price: price,
            product_url: product_url,
            video_id: video_id
        }

        const result = await productService.create(productCreate);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const findAll = async (req, res) => {
    try {

        const products = await productService.findAll();

        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const findById = async (req, res) => {
    try {
        const { id } = req.params

        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error(`${id} is not a ObjectId format in Mongo`);
        }

        const products = await productService.findById(id);

        // console.log(products)
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const findByVideoId = async (req, res) => {
    try {
        const { video_id } = req.params

        if (!mongoose.Types.ObjectId.isValid(video_id)) {
            throw new Error(`${video_id} is not a ObjectId format in Mongo`);
        }

        const products = await productService.findByVideoId(video_id);

        // console.log(products)
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    create, findAll,
    findById, findByVideoId
};