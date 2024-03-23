import mongoose from "mongoose"

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION_URL)
        console.log("Connected to DB")
    } catch (error) {
        
    }
}

export { connectToDB }