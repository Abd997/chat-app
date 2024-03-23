import { User } from "../models/index.js"

const userController = {}

userController.getUsers = async (req, res) => {
    const users = await User.find({
        _id: { $ne: req.user._id }
    })
    return res.send(users)
}

export { userController }