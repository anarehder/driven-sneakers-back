import joi from "joi"

export const checkoutSchema = joi.object({
    product: joi.array().items({
        productID: joi.string().required(),
        productAmout: joi.string().required(),
    }),
    totalPrice: joi.string().required(),
    address: joi.string().required(),
    email: joi.string().email().required()
})