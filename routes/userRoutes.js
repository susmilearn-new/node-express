const express = require('express')
const { message } = require('statuses')

const routes = express.Router()
const users = require("../models/userModel")
const { getAllUSers, getUserById, createUser} = require('../controller/userController')

// list Users
routes.get("/", getAllUSers)

// get user By id
routes.get("/:id", getUserById)

// Create new user
routes.post("/", createUser)

module.exports = routes