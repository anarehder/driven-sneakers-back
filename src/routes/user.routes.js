import { Router } from "express";
import { signup, signin } from "../controllers/user.controller.js";
import { userSchemaValidation } from "../middlewares/userSchemaValidation.js";


const router = Router()

router.post("/sign-up", userSchemaValidation, signup)
router.post("/sign-in",signin)


export default router