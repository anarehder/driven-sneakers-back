import { Router } from "express"
import homeRoutes from "./home.routes.js"
import userRouter from "./user.routes.js"

const router = Router()
router.use(homeRoutes)
router.use(userRouter)

export default router