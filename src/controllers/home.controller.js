import { db } from "../database/database.connection.js"

export async function addProduct(req, res) {
    const { name, value } = req.body

    try {
        const newProduct = { name, value};
        console.log(newProduct)
        await db.collection("productsList").insertOne(newProduct)
        res.sendStatus(201)
        
    } catch (err) {
        res.status(500).send(err.message)
    }
}