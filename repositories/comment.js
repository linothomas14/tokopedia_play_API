const CommentModel = require('../models/comment');

const findAll = async () => {
    try {

        const comments = await CommentModel.find()

        return comments
    } catch (error) {
        throw new Error(error);
    }
};

const findById = async (id) => {
    try {


        const comments = await CommentModel.findById(id).exec();

        if (comments === null) {
            throw new Error(`comment with id : ${id} not found`);
        }

        return comments
    } catch (error) {
        console.log(error)
        throw new Error(error.message);
    }
};

const findByVideoId = async (video_id) => {
    try {


        const comments = await CommentModel.find({ video_id: video_id }).exec();

        if (comments === null) {
            throw new Error(`comment with id : ${video_id} not found`);
        }

        return comments
    } catch (error) {
        console.log(error)
        throw new Error(error.message);
    }
};


const create = async (commentData) => {
    try {
        const comments = await CommentModel.create(commentData);
        return comments
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = { findAll, findById, findByVideoId, create };