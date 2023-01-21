const express = require('express');
const {
    getAllChat,
    getChat,
    getChatByUser,
    createChat
} = require("../controllers/chats");

const router = express.Router()

router.get('/', getAllChat)

router.post('/get', getChat)

router.post('/create', createChat)

router.get('/create', getAllChat)

router.get('/user/:id', getChatByUser)

module.exports = router