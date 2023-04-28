import { Router } from "express"
import homeRoutes from "./home.routes.js"
import userRoutes from "./user.routes.js"

const router = Router()
router.use(homeRoutes)
router.use(userRoutes)

export default router