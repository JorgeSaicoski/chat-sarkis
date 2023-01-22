const Chat = require("../../models/chats");
const getChatsFull = async (req = {}) => {
    let ChatsFull = new Promise((res, rej)=>{
        Chat.find(
            req,
            (err, item)=>{
                if(err){
                    rej({message:err.message})
                }
                res(item)
            }
        )
    })
    await ChatsFull
        .then((chats)=> {
            return chats.populate('participants')
        })
        .catch((err)=>{
            return ({message:err.message})
        })
}

module.exports = { getChatsFull }