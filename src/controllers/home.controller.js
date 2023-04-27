import dayjs from "dayjs";
import { db } from "../database/database.connection.js"

export async function addProduct(req, res) {
    const { name, image, value } = req.body

    try {
        const newProduct = { name, image, value};
        console.log(newProduct)
        await db.collection("productsList").insertOne(newProduct)
        res.sendStatus(201)
        
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export async function checkout(req,res){
    const {product, totalPrice, address, email} = req.body;
    const date = dayjs().format("DD/MM/YYYY");

    try{
        const user = await db.collection("users").findOne({ email })
        if (!user) {
            res.status(401).send("O e-mail não está cadastrado!")
        }
        const newPurchase = {userID: user._id, name: user.name, date, product, totalPrice, address};
        await db.collection("sales").insertOne(newPurchase);
        res.status(201).send(newPurchase)

    } catch (err) {
        res.status(500).send(err.message)
    }
    
}