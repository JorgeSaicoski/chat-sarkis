const Chat = require("../models/chats");
const Message = require("../models/messages");

exports.getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        console.log(messages)
        res.status(200).json(messages)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

exports.createMessages = async (req, res) => {
    const message = req.body
    const newMessage = new Message(message);

    try {
        await newMessage.save()
        res.status(201).json(newMessage)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
    res.send("messages")
}

exports.getMessageByChat = async (req, res) =>{
    try{
        const  chats = Message.find(
            {
                chat:req.params.id
            }
        ).populate('participants')
        res.status(200).json(chats)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

exports.deleteMessagesByChat = async (req, res) =>{
    try{
        await Chat.deleteMany({chat:req.params.id})
    }catch (error) {
        res.status(404).json({message:error.message})
    }
}