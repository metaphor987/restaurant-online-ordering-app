import express from "express"
import mysql from "mysql"
import dotenv from "dotenv"
import cors from "cors"

const app = express()

dotenv.config();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: process.env.MYSQL_PASSWORD,
    database: "Restaurant"  
    // database: "test"
})

// this allows us to send json using a client
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.json("Hello, this is the Backend!2")
})

app.get("/menu", (req, res) => {
    const q = "SELECT * FROM Items"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.get("/books", (req, res) => {
    const q = "SELECT * FROM books"
    db.query(q, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books", (req, res) => {
    const q = "INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover,
    ]

    db.query(q, [values], (err, data) =>{
        if (err) return res.json(err)
        return res.json("Books have been successfully added")
    })
})

// this part works but don't merge data for same itemId together
// app.post('/addToCart', (req, res) => {
//     const item = req.body.item;

//     const q = "INSERT INTO Cart (`itemId`, `quantity`) VALUES (?)"
//     const values = [
//         req.body.id,
//         req.body.quantity,
//     ]

//     db.query(q, [values], (err, data) =>{
//         if (err) return res.json(err)
//         return res.status(200).json({message: 'New item has been added to the cart!'})
//     })
// })

app.post('/updateCart', (req, res) => {
    // console.log("app.post start")
    const itemId = req.body.id;
    const quantityChange = req.body.quantity;
    const q = `SELECT * FROM Cart WHERE itemId = ${itemId}` 
    // console.log(q)

    db.query(q, [[itemId]], (err, data) => {
        if (err){
            console.log("Error executing SELECT query", err);
            return res.json(err)
        }
        console.log("res.length", res.length)
        console.log("data.length", data.length)

        if (data.length > 0){
            const queryUpdate = `UPDATE Cart SET quantity = quantity + ${quantityChange} WHERE itemId = ${itemId}`
            
            db.query(queryUpdate, [[itemId]], (err,data) => {
                if (err){
                    console.log("Error executing UPDATE query", err);
                    return res.json(err)
                }
                console.log('Quantity updated successfully');
            })
        } else{
            const queryInsert = "INSERT INTO Cart (`itemId`, `quantity`) VALUES (?)"
            const values = [itemId, 1]

            // console.log(queryInsert)
            db.query(queryInsert, [values], (err, data) => {
                if (err){
                    console.log("Error executing INSERT query", err);
                    return res.json(err)
                }
                console.log("New item inserted successfully")
            })
        }
    })
})

app.get('/details/:id', (req, res) => {

})

app.listen(8000, ()=>{
    console.log("Connected to Backend!2")
})