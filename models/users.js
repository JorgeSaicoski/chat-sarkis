const mongoose = require("mongoose")

const ChatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    business: {
        is: Boolean,
        chatInit: String
    },
    email: String,
    vip: Boolean,
    img: String,
    bio: String,


});

const Chat = mongoose.model("Chat", ChatSchema);

module.exports = { Chat };