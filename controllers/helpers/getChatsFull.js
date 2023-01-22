const Chat = require("../../models/chats");
const getChatsFull = async (req = {}) => {
        try {
            let ChatsFull = await Chat.find(req,
                (err, chats) => {
                    if (err) {
                        return err
                    }
                    return chats
                })
            console.log(ChatsFull)
            await ChatsFull.populate('participants')
            return ChatsFull
        } catch (err){
            return err
        }

}

module.exports = { getChatsFull }