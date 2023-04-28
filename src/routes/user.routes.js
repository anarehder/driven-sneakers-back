import { Router } from "express";
import { signup, signin } from "../controllers/user.controller.js";
import { userSchemaValidation, signinSchemaValidation } from "../middlewares/userSchemaValidation.js";


const userRoutes = Router()

userRoutes.post("/sign-up", userSchemaValidation, signup)
userRoutes.post("/sign-in", signinSchemaValidation, signin)


export default userRoutes