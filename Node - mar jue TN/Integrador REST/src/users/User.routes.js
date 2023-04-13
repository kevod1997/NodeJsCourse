import { Router } from "express"
import * as UserController from "./User.controller.js"

const UserRouter = Router()

UserRouter.post("/users/login", UserController.login)




export default UserRouter