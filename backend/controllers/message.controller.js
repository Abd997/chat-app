import { BadRequestError } from "../errors/index.js"
import { Conversation } from "../models/index.js"

const messageController = {}

messageController.createMessage = async (req, res) => {
    const {
        senderId,
        recieverId,
        message,
    } = req.body
    
    const conversation = await Conversation.findOne({
        participants: { $all: [senderId, recieverId] }
    })
    let newConversation
    if (!conversation) {
        newConversation = new Conversation({
            participants: [senderId, recieverId]
        }).save()
    }

    const newMessage = new Conversation({
        senderId,
        recieverId,
        message
    }).save()
    return res.status(201).send(newMessage)
}

export { messageController }