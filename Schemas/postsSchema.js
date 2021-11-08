const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postsSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        required: true,
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    tags: {
        type: [String],
        required: true
    },
    _userId: {
        type: Schema.Types.ObjectId,
        required: true
    }
})

module.exports = postsSchema