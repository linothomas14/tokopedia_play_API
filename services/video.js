const videoRepository = require('../repositories/video');

const create = async (videoData) => {

    res = videoRepository.create(videoData);

    return res
};

const findAll = async () => {
    res = videoRepository.findAll();

    return res
};

const findById = async (id) => {

    res = videoRepository.findById(id);
    // console.log(res)
    return res

};


module.exports = {
    create,
    findAll,
    findById
};