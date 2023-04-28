import joi from "joi"

export const newProductSchema = joi.object({
    name:joi.string().required(),
    image:joi.string().required(),
    price: joi.number().positive().precision(2).required(),
    description: joi.string().required()
})