import Router from "express-promise-router"
import { userController } from "../controllers/index.js"
const routes = Router()

routes.get("/users", userController.getUsers)

export { routes as userRoutes}