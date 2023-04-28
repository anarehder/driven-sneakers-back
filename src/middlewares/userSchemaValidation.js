import { userCollection } from "../database/database.connection.js";
import { userSchema } from "../schemas/user.schema.js";
import bcrypt from "bcrypt"

export function userSchemaValidation(req, res, next) {
  const user = req.body;

  const validation = userSchema.validate(user, { abortEarly: false });

  if (validation.error) {
    const errors = validation.error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  res.locals.user = user;
  next();
}

export async function signinSchemaValidation(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await userCollection.findOne({ email });
    if (!user) {
      return res.status(401).send("Email não cadastrado");
    }

    const passwordOK = bcrypt.compareSync(password, user.password);
    if (!passwordOK) {
      return res.status(401).send("Senha incorreta");
    }
    res.locals.user = user;
  } catch (err) {
    res.status(500).send(err.message);
  }

  next();
}
