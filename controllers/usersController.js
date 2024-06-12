const asyncHandler = require('express-async-handler')
const UserSchema = require('../models/usersModel')


//GET All API

const getAllUsers =asyncHandler( async (req, res) => {
  const users = await UserSchema.find()

  res.json(users)
  });
  
  // POST API
  
  const createUser =asyncHandler( async (req, res) => {
    if(!req.body) {
      res.status(400)
      throw new Error("Please check the input fields")
    }

    const createdUser = await UserSchema.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      isAdmin: req.body.isAdmin
    })
    res.json(createdUser)
  });
  
  
  //UPDATE API
  
  const updateUSer =asyncHandler( async (req, res) => {
    const user = await UserSchema.findById(req.params.id)

    if(!user) {
      res.status(400)
      throw new Error("User not found")
    }

    const updatedUSer = await UserSchema.findByIdAndUpdate(req.params.id, req.body,{
      new: true,
    }) 
    res.json(updateUSer);
  });
  
  //DELETE API
  
  const DeleteUser =asyncHandler( async (req, res) => {

    const user = await UserSchema.findById(req.params.id)

    if(!user) {
      res.status(400)
      throw new Error("User not found")
    }

    await user.remove()
    
    res.json({id: req.params.id});
  });
  
  module.exports = {
    getAllUsers,
    createUser,
    updateUSer,
    DeleteUser,
  };
  