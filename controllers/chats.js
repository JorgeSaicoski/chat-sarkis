const Chat = require("../models/chats");
const {getItems} = require("../db/middleware/getItems");
const {getOneItem} = require("../db/middleware/getOneItem");
const {createItem} = require("../db/middleware/createItem");
const {getChatsFull} = require("./helpers/getChatsFull");

exports.getAllChat = async (req, res) => {
    console.log("chatsLog")
    const chatsLog = await getChatsFull({})
    console.log(chatsLog)
    try {
        res.status(200).json( await getChatsFull({}))
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

exports.getChat = async (req,res) =>{
    try {
        res.status(200).json(await getOneItem(req.params.id,Chat))
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

exports.getChatByUser = async (req, res) =>{
    try {
        res.status(200).json(await getChatsFull({
            participants: req.participants
        }))
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

exports.createChat = async (req, res) => {
    console.log("__________________________________________________")
    console.log(req.body)
    const chat = await createItem(req.body, Chat).then(
        (i)=>{
          console.log(i)
        }
    ).catch(
        (i)=>{
            console.log(i)
        }
    )
    console.log(chat)
    res.status(200).json(chat)
    /*
    try {
        console.log("__________________________________________________2")
        res.status(200).json(await createItem(req.body, Chat))
    } catch (error) {
        res.status(404).json({message:error.message})
    }

     */
}