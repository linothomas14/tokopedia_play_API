const mongoose = require('mongoose');
const { database } = require('../config/mongodb');

const commentSchema = mongoose.Schema({
    username: { type: String, required: true, maxLength: 100 },
    comment: { type: String, required: true, maxLength: 100 },
    video_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "videos",
        required: true
    },

},
    { timestamps: true });


const Comment = mongoose.model('comments', commentSchema);

module.exports = Comment
