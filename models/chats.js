const mongoose = require("mongoose")

const ChatSchema = new mongoose.Schema({
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message'
    }],
    participants:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
});


module.exports = mongoose.model('Chat', ChatSchema);