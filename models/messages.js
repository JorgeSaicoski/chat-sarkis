const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
    chat: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    readed: {
        type: Boolean,
        required: true
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = { Message };