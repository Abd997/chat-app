import bcrypt from "bcryptjs"
import { BadRequestError } from "../errors/index.js"
import { User } from "../models/index.js"

const authController = {}

authController.signin = async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username })
    if (!user)
        throw new BadRequestError("User does not exist")
    const isPasswordCorrect = bcrypt.compare(password, user.password)
    if (!isPasswordCorrect)
        throw new BadRequestError("Password is incorrect")

    const token = genJwtToken(user._id)
    res.cookie("jwt", token)
    return res.send(user)
}

authController.signup = async (req, res) => {
    const {
        fullname,
        username,
        password,
        confirmPassword,
        gender
    } = req.body
    
    if (password !== confirmPassword)
        throw new BadRequestError("Passwords do not match")

    const user = await User.findOne({ username })
    if (user)
        throw new BadRequestError("User already exists")

    const newUser = new User({
        fullname,
        username,
        password,
        gender,
    }).save()
    const token = genJwtToken(newUser._id)
    res.cookie("jwt", token)

    return res.status(201).send(newUser)
}

authController.signout = async (req, res) => {
    res.clearCookie("jwt")
    return res.send("Successfully signed out")
}

export { authController }