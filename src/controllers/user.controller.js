import bcrypt from "bcrypt"
import { userCollection } from "../database/database.connection.js"


export async function signup(req, res){
    const user = req.body
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

}