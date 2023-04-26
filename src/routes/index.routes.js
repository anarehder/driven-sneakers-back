import { Router } from "express"
import homeRoutes from "./home.routes.js"

const router = Router()
router.use(homeRoutes)

export default router