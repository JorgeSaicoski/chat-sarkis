const express = require('express');
const {
    getAllChat,
    getChat,
    getChatByUser
} = require("../controllers/chats");

const router = express.Router()

router.get('/', getAllChat)

router.post('/chat', getChat)

router.get('/user/:id', getChatByUser)

module.exports = router