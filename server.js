const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const userRouter = require("./routers/user.router");


const app = express()

app.use(express.json())

app.use(cors())

// app.use("/", (req, res) => {
//     res.send("Hello world")
// })
app.use("/api/v1/users", userRouter)

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("Connect to db successfully")
        
    } catch (error) {
        console.log("Could not connect to database", error)
    }
}

app.listen(process.env.PORT, async () => {
    console.log("App is listening to port ", process.env.PORT)
    await connectToDb()
})