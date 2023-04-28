import { userSchema } from "../schemas/user.schema.js"

export function userSchemaValidation(req, res, next){
    const user = req.body

    const validation = userSchema.validate(user, {abortEarly: false})

    if(validation.error){
        const errors = validation.error.details.map((detail) => detail.message)
        return res.status(422).send(errors)
    }

    res.locals.user = user
    next()
}
