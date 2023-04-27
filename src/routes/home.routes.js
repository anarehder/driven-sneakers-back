import { Router } from "express"
import { addProduct, checkout } from "../controllers/home.controller.js"
import { validateSchema } from "../middlewares/validateSchema.middleware.js"
import { checkoutSchema } from "../schemas/checkout.schema.js"

const homeRoutes = Router()

homeRoutes.post("/", addProduct)
homeRoutes.post("/checkout", validateSchema(checkoutSchema), checkout)

export default homeRoutes