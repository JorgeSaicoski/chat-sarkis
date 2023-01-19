import {Message} from "../models/messages";
export const getMessages = async (req, res) => {
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