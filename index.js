const express =  require('express')

const app = express();

app.get("/", (req,res)=>{
    res.send("Home page")
})

app.get("/about", (req,res)=>{
    res.send("About page")
})

app.get("/service", (req,res)=>{
    res.send("Service page")
})

app.get("/users",(req,res)=>{
    res.json(
        {
            "name": "Arjun",
            "Age": 26
        }
    )
})

app.listen(5000, ()=>{
    console.log("Server Running..")
})