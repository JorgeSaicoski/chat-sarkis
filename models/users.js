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
        friends:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
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

module.exports = mongoose.model('User', UserSchema);