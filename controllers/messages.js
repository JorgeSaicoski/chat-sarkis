import {Message} from "../models/messages";
import {Chat} from "../models/chats";
export const getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        console.log(messages)
        res.status(200).json(messages)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const createMessages = async (req, res) => {
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

export const getMessageByChat = async (req, res) =>{
    try{
        const  chats = Message.find(
            {
                chat: req.body.chat
            }
        ).populate('participants')
        res.status(200).json(chats)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}