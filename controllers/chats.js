const Chat = require("../models/chats");

exports.getAllChat = async (req, res) => {
    try {
        const chats = await Chat.find();
        console.log(chats)
        res.status(200).json(chats)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

exports.getChat = async (req,res) =>{
    try {
        const chat = Chat.findOne({
            participants: req.body.participants
        })
        res.status(200).json(chat)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

exports.getChatByUser = async (req, res) =>{
    try{
        const  chats = Chat.find(
            {
                participants: [req.params.id]
            }
        ).populate('participants')
        res.status(200).json(chats)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

exports.createChat = async (req, res) => {
    const chat = req.body
    const newChat = new Chat(chat);

    try {
        await newChat.save()
        res.status(201).json(newChat)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    res.send("messages")
}