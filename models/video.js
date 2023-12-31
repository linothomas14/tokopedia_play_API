const mongoose = require('mongoose');
const { database } = require('../config/mongodb');

const videoSchema = mongoose.Schema({
    title: { type: String, required: true, maxLength: 100 },
    video_url: { type: String, required: true, maxLength: 100 },
    thumbnail_url: { type: String, required: true, maxLength: 100 },
},
    { timestamps: true });


const Video = mongoose.model('videos', videoSchema);

module.exports = Video
