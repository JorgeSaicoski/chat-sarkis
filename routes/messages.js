import { getMessages } from "../controllers/messages";

const express = require('express');
const router = express.Router()

router.get('/', getMessages)

module.exports = router