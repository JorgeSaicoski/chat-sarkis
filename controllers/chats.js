import {Chat} from "../models/chats";
import {Message} from "../models/messages";

export const getAllChat = async (req, res) => {
    try {
        const chats = await Chat.find();
        console.log(chats)
        res.status(200).json(chats)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const getChat = async (req,res) =>{
    try {
        const chat = Chat.findOne({
            participants: req.body.participants
        })
        res.status(200).json(chat)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const getChatByUser = async (req, res) =>{
    try{
        const  chats = Chat.find(
            {
                participants: [req.body.user]
            }
        ).populate('participants')
        res.status(200).json(chats)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}