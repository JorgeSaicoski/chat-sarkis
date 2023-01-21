const express = require('express');
const {
    getAllChat,
    getChat,
    getChatByUser
} = require("../controllers/chats");

const router = express.Router()

router.get('/', getAllChat)

router.post('/get', getChat)

router.post('/create', getChat)


router.get('/user/:id', getChatByUser)

module.exports = router