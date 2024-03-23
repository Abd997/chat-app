import { messageController } from "../controllers/index.js"
import Router from "express-promise-router"
const Routes = Router()

Routes.post("/", messageController.createMessage)
Routes.get("/", messageController.getMessages)

export { Routes as MessagesRoutes }