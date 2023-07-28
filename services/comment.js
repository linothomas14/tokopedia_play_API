const commentRepository = require('../repositories/comment');

const create = async (commentData) => {

    res = commentRepository.create(commentData);

    return res
};

const findAll = async () => {
    res = commentRepository.findAll();

    return res
};

const findById = async (id) => {

    res = commentRepository.findById(id);

    return res

};

const findByVideoId = async (video_id) => {

    res = commentRepository.findByVideoId(video_id);

    return res

};


module.exports = {
    create,
    findAll,
    findById,
    findByVideoId
};