import bcrypt from "bcrypt"
import { userCollection, sessionCollection } from "../database/database.connection.js"
import {v4 as uuid} from "uuid"


export async function signup(req, res){
    const user = res.locals.user
    console.log(user)

    const passwordHash = bcrypt.hashSync(user.password, 10)


    try{
        await userCollection.insertOne({...user, password: passwordHash})
        res.sendStatus(201)

    }catch(err){
        res.status(500).send(err.message)
    }
}

export async function signin(req, res){
    const user = res.locals.user
    const token = uuid()

    try{
        const newLogin = {token, userId: user._id}
        await sessionCollection.insertOne(newLogin)
        res.send(newLogin)
    }catch(err){
        res.status(500).send(err.message)
    }
}