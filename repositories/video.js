const VideoModel = require('../models/video');

const findAll = async () => {
    try {

        const videos = await VideoModel.find()

        return videos
    } catch (error) {
        throw new Error(error);
    }
};

const findById = async (id) => {
    try {


        const videos = await VideoModel.findById(id).exec();

        if (videos === null) {
            throw new Error(`video with id : ${id} not found`);
        }




        return videos
    } catch (error) {
        console.log(error)
        throw new Error(error.message);
    }
};


const create = async (videoData) => {
    try {
        const videos = await VideoModel.create(videoData);
        return videos
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = { findAll, findById, create };