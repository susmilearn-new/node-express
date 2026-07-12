 const express = require("express");

 const app = express();
 const PORT = 3000;

 app.get("/", (req,res)=>{
    res.send("Hello")
 })

 app.use(express.json());

//get all users
const users = [ {
        id: 1,
        name: "Arjun",
        age: 28
    },
    {   
        id: 2,
        name: "Dev",
        age: 28
    }]

  app.get("/users", (req,res)=>{

    res.json(users)
 })

//  get user id
 app.get("/users/:id", (req,res)=>{

    const userId = Number(req.params.id);
    const user = users.find(u=>u.id===parseInt(userId));


    if(!user){
        return res.status(404).json({error:" not found"})
    }
    res.status(200).json(user);
 })


//  create new users

app.post("/users",(req,res)=>{

   // console.log(req.body);
   const {name, age} = req.body

   if(!name || !age){
      return res.status(400).json({
         message: "Name and age mandatory"
      })
   }

   const newUser = {
      id: users.length+1,
      name,
      age
   }

   users.push(newUser);

   res.status(201).json({message: "User created"})
})
 
// put method/ Update user

app.put("/users/:id", (req, res)=>{

   const userId = Number(req.params.id)
   const {name, age} = req.body

   const user = users.find(user=>user.id === userId)

   if(!user){
      return res.status(404).json({
         message:"user not found"
      })
   }

   user.name = name,
   user.age = age

   res.status(200).json({
      message:"user Updated successfully"
   })

})

// delete method/ delete user

app.delete("/users/:id", (req, res)=>{

   const userId = Number(req.params.id)
   const index = users.findIndex(user=>user.id === userId)

   if(index === -1){
      return res.status(404).json({
         message:"user not found"
      })
   }

   users.splice(index, 1);

   res.status(200).json({
      message:"user deleted successfully"
   })

})


 app.listen(PORT,()=>{
    console.log("server running..")
 });