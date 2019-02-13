var express = require('express');
var router = express.Router();
const User = require('../models/users');

// Out Tonight ROUTE [LIST OF ALL Users Out Tonight]
router.get('/', async (req, res, next) => {
  try {
      const foundUsers = await User.find({outTonight: true})
      console.log(foundUsers)
      res.json({
          status: 200,
          data: foundUsers
      })
  } catch (err){
      res.send(err)
  }
})

// USER PROFILE 
router.get('/:id', async (req, res, next) => {
  try {
    const foundUser = await User.findById(req.params.id)
    console.log(foundUser)
    res.json({
      status: 200,
      data: foundUser
    })
  } catch (err) {
    res.send(err)
  }
})

// EDIT USER PAGE
router.put('/:id', async (req, res) => {
  console.log(req.params)
  try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
      res.json({
          status: 200,
          data: updatedUser
      })
  } catch (err) {
      res.send(err)
  }
})

// DELETE User PAGE
router.delete('/:id', async (req, res) => {
  try {
      const deletedUser = await User.findByIdAndRemove(req.params.id)
      res.json({
          status: 200,
          data: deletedUser
      })
  } catch(err){
      res.send(err);
  }
})





module.exports = router;