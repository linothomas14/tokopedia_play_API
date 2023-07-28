const productRepository = require('../repositories/product');

const create = async (productData) => {

    res = productRepository.create(productData);

    return res
};

const findAll = async () => {
    res = productRepository.findAll();

    return res
};

const findById = async (id) => {

    res = productRepository.findById(id);

    return res

};

const findByVideoId = async (video_id) => {

    res = productRepository.findByVideoId(video_id);

    return res

};


module.exports = {
    create,
    findAll,
    findById,
    findByVideoId
};