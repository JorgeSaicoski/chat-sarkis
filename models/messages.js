const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chat'
    },
    message: {
        type: String,
        required: true,
    },
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    receive:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    read: {
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