import mongoose from "mongoose"
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        enum: ["male", "female"],
        required: true,
    },
    profilePic: {
        type: String,
        default: ""
    }
})

// Middleware to hash passwords before saving
UserSchema.pre('save', async function () {
    const user = this
    if (!user.isModified('password')) 
        return 

    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(user.password, salt)
        user.password = hashedPassword
    } catch (error) {
        throw error
    }
})

const User = mongoose.model("User", UserSchema)

export { User }