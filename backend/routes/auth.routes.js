import { authController } from "../controllers/index.js"
import Router from "express-promise-router"
const authRoutes = Router()

authRoutes.post("/signin", authController.signin)

authRoutes.post("/signup", authController.signup)

authRoutes.post("/signout", authController.signout)

export { authRoutes }