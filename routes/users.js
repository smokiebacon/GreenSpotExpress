var express = require('express');
var router = express.Router();
const User = require('../models/users');

// CREATE NEW USER
router.post('/', async (req, res) => {
  try {
    const createdUser = await User.create(req.body)
    res.json({
      status: 200,
      data: createdUser
    })
  } catch(err) {
    res.send(err)
  }
})

// USER PROFILE [FOR USER TO SEE ONLY]
router.get('/:id', async (req, res, next) => {
  try {
    const foundUser = await User.findById(req.params.id)
    res.json({
      status: 200,
      data: foundUser
    })
  } catch (err) {
    res.send(err)
  }
})

router.put('')



module.exports = router;