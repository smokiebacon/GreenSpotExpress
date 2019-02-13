exports.google = (req, res) => {
    const io = req.app.get('io')
    const user = {
      name: req.user.username,
      id: req.user._id
    }
    io.in(req.session.socketId).emit('google', user)
   }