import { Router } from "express"
import { addProduct, checkout, showProducts } from "../controllers/home.controller.js"
import { validateSchema } from "../middlewares/validateSchema.middleware.js"
import { checkoutSchema } from "../schemas/checkout.schema.js"
import { newProductSchema } from "../schemas/newproduct.schema.js"

const homeRoutes = Router()

homeRoutes.get("/", showProducts)
homeRoutes.post("/addProduct", validateSchema(newProductSchema), addProduct)
homeRoutes.post("/checkout", validateSchema(checkoutSchema), checkout)

export default homeRoutes