const bcrypt = require('bcryptjs')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
    const users = await User
      .find({}).populate('blogs', { content: 1, date: 1 })
  
    response.json(users)
});

usersRouter.post('/', async (request, response) => {
    const body = request.body
  
    const saltRounds = bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(body.password, saltRounds)
  
    const user = new User({
      username: body.username,
      name: body.name,
      password: passwordHash,
    })
  
    const savedUser = await user.save()
  
    response.json(savedUser)
})

module.exports = usersRouter