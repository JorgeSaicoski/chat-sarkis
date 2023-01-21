const Chat = require("../models/chats");

exports.getAllChat = async (req, res) => {
    try {
        const chats = await Chat.find()
            .exec()
            .then((chats)=>{
                res.status(200).json(chats)
            })
            .catch(res.status(404).json({message:error.message}));
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

exports.getChat = async (req,res) =>{
    try {
        const chat = Chat.findOne({
            participants: req.body.participants
        })
            .exec()
            .then((chats)=>{
                res.status(200).json(chats)
            })
            .catch(res.status(404).json({message:error.message}));
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
            .exec()
            .then((chats)=>{
                res.status(200).json(chats)
            })
            .catch(res.status(404).json({message:error.message}));
        res.status(200).json(chats)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

exports.createChat = async (req, res) => {
    const chat = req.body
    try {
        await Chat.create(chat)
            .exec()
            .then((chat)=>{
                res.status(201).json(chat)
            })
            .catch(res.status(404).json({message:error.message}));

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}