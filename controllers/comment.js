const commentService = require('../services/comment');
const mongoose = require('mongoose');
const create = async (req, res) => {
    try {

        const {
            username,
            comment,
            video_id
        } = req.body;

        if (!username || !comment || !video_id) {
            throw new Error("Insufficient Parameter")
        }

        let commentCreate = {
            username: username,
            comment: comment,
            video_id: video_id
        }

        await commentService.create(commentCreate);
        res.status(201).json({ "status": "success" });
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ "status": "fail" });
    }
};

const findAll = async (req, res) => {
    try {

        const comments = await commentService.findAll();

        res.status(200).json(comments);
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

        const comments = await commentService.findById(id);

        // console.log(comments)
        res.status(200).json(comments);

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

        const comments = await commentService.findByVideoId(video_id);

        // console.log(comments)
        res.status(200).json(comments);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    create, findAll,
    findById, findByVideoId
};