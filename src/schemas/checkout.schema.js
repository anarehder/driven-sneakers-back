import joi from "joi"

export const checkoutSchema = joi.object({
    product: joi.array().items({
        productID: joi.string().required(),
        productAmout: joi.number().required(),
    }),
    totalPrice: joi.number().required(),
    address: joi.string().required(),
    email: joi.string().email().required()
})