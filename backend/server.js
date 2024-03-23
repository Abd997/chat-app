import dotenv from "dotenv"
import express from "express"
import Router from "express-promise-router"
import { MessagesRoutes, authRoutes, userRoutes } from "./routes/index.js"
import { connectToDB } from "./db/connect.js"

dotenv.config()

const app = express()
const router = Router()

app.use(router)
router.use(express.json())

router.use("/api/auth", authRoutes)
router.use("/api/messages", MessagesRoutes)
router.use("/api/users", userRoutes)

app.use((error, req, res, next) => {
    console.log("error handler")
    const status = error.statusCode || 500
    const message = error.message
    const data = error.data
    res.status(status).json({ message: message, data: data })
})

// connectToDB()
app.listen(process.env.PORT, () => console.log("Server started"))