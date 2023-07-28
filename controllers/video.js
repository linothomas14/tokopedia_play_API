const videoService = require('../services/video');
const mongoose = require('mongoose');
const create = async (req, res) => {
    try {

        const {
            title,
            thumbnail_url,
            video_url
        } = req.body;

        if (!title || !thumbnail_url || !video_url) {
            throw new Error("Insufficient Parameter")
        }

        let videoCreate = {
            title: title,
            thumbnail_url: thumbnail_url,
            video_url: video_url
        }

        const result = await videoService.create(videoCreate);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const findAll = async (req, res) => {
    try {

        const videos = await videoService.findAll();

        res.status(200).json(videos);
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

        const videos = await videoService.findById(id);

        // console.log(videos)
        res.status(200).json(videos);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    create, findAll,
    findById,
};