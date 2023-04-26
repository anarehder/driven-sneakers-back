import { Router } from "express"
import { addProduct } from "../controllers/home.controller.js"

const homeRoutes = Router()

homeRoutes.post("/", addProduct)

export default homeRoutes