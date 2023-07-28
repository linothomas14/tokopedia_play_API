const ProductModel = require('../models/product');


const findAll = async () => {
    try {

        const products = await ProductModel.find()

        return products
    } catch (error) {
        throw new Error(error);
    }
};

const findById = async (id) => {
    try {
        const products = await ProductModel.findById(id).exec();

        if (products === null) {
            throw new Error(`product with id : ${id} not found`);
        }
        return products
    } catch (error) {
        console.log(error)
        throw new Error(error.message);
    }
};

const findByVideoId = async (video_id) => {
    try {
        const products = await ProductModel.find({ video_id: video_id }).exec();

        if (products === null) {
            throw new Error(`product with id : ${video_id} not found`);
        }
        return products
    } catch (error) {
        console.log(error)
        throw new Error(error.message);
    }
};


const create = async (productData) => {
    try {
        const products = await ProductModel.create(productData);
        return products
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = { findAll, findById, findByVideoId, create };