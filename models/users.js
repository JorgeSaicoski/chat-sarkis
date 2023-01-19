const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    business: {
        is: Boolean,
        chatInit: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    vip: Boolean,
    img: String,
    bio: String,
    },
    { collection: 'user-data'}
    );

const User = mongoose.model("User", UserSchema);

module.exports = { User };