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

app.listen(8000, ()=>{
    console.log("Connected to Backend!2")
})