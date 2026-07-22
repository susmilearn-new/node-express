const { message } = require('statuses')
const users = require('../models/userModel')

// list Users
const getAllUSers = (req,res) =>{
    res.status(200).json(users)
}

// get user By id
const getUserById = (req, res)=>{
    const userId = Number(req.params.id)
    const user = users.find(user=>user.id === userId)

    if(!user){
        return res.status(404).json({
            message:"User not found"
        })
    }

    res.status(200).json(user)
}

// create new user
const createUser = (req, res)=>{
    const {name, age} = req.body

    if(!name || !age){
        return res.status(400).json({
            message: "name and age mandatory"
        })
    }

    const newUser = {
        id: users.length+1,
        name,
        age
    }

    users.push(newUser)

    res.status(200).json({
        message:"New user created"
    })
}

module.exports = {
    getAllUSers,
    getUserById,
    createUser
}