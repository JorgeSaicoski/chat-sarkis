const mongoose = require("mongoose")

const ChatSchema = new mongoose.Schema({
    message: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }],
    participants:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
});

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = { Chat };