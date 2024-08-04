const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortenedUrlId:{
        type: String,
        required: true,
        unique: true,
    },
    originalUrl:{
        type: String,
        required: true,
    },
    visitHistory:[{
        timestamp:{
            type: Number
        }
    }],
}, {timestamps: true})

const Url = mongoose.model('url', urlSchema)

module.exports = Url;