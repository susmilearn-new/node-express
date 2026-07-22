const express = require('express')
const userRoutes = require('./routes/userRoutes')
require('dotenv').config()


const app = express()

const PORT = process.env.PORT || 5000

app.get("/", (req, res)=>{
    return res.send("API calling...")
})


// routes middleware
app.use("/users", userRoutes)

app.listen(PORT, ()=>{
    console.log(`server is running from ${PORT} port`)
})