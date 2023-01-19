const {
    createMessages,
    deleteMessagesByChat,
    getAllMessages,
    getMessageByChat
} = require("../controllers/messages");

const express = require('express');
const router = express.Router()

router.get('/', getAllMessages)

router.post('/create', createMessages)

router.get('/chat/:id', getMessageByChat)

router.delete('/chat/:id', deleteMessagesByChat)

module.exports = router