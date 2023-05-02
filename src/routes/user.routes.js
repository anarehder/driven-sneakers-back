import { Router } from "express";
import { signup, signin, logout } from "../controllers/user.controller.js";
import { userSchemaValidation, signinSchemaValidation } from "../middlewares/userSchemaValidation.js";
import { authValidation } from "../middlewares/auth.middleware.js";


const userRoutes = Router()

userRoutes.post("/sign-up", userSchemaValidation, signup)
userRoutes.post("/sign-in", signinSchemaValidation, signin)
userRoutes.post("/logout", authValidation, logout)


export default userRoutes