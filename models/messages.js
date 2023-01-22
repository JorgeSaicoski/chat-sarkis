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
        default: false
    },
    createdAt:{
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Message', MessageSchema);