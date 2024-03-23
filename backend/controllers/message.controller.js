import { BadRequestError } from "../errors/index.js"
import { Conversation, Message } from "../models/index.js"

const messageController = {}

messageController.createMessage = async (req, res) => {
    const {
        senderId,
        recieverId,
        message,
    } = req.body
    
    let conversation = await Conversation.findOne({
        participants: { $all: [senderId, recieverId] }
    })
    if (!conversation) {
        conversation = Conversation.create({
            participants: [senderId, recieverId]
        })
    }

    const newMessage = Message.create({
        senderId,
        recieverId,
        message
    })
    conversation.participants.push(newMessage._id)
    await conversation.save()
    
    return res.status(201).send(newMessage)
}

messageController.getMessages = async (req, res) => {
    const {

    } = req.query
    const conversation = await Conversation.findOne({
        participants: { $all: [senderId, recieverId] }
    }).populate(Message.modelName)

    return res.send(conversation)
}

export { messageController }