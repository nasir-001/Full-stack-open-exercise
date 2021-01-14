const blogsRouter = require('express').Router()
const { request, response } = require('express')
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if(authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog
    .find({}).populate('user', { username: 1, name: 1 })
    
    response.json(blogs)
})

blogsRouter.put('/:id', async (request, response, next) => {
    const blog = request.body;

    const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, {
      new: true
    });
    response.json(updatedBlog.toJSON());
})

blogsRouter.delete('/api/blogs/:id', async (request, response) => {
    const decodedToken = jwt.verify(request.token, process.env.SECRET);

  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'Token missing or invalid' });
  }

  const user = await User.findById(decodedToken.id);
  const blog = await Blog.findById(request.params.id);

  if (blog.user.toString() !== user.id.toString()) {
    return response
      .status(401)
      .json({ error: 'Only the creator can delete blogs' });
  }

  await blog.remove();
  user.blogs = user.blogs.filter(
    (b) => b.id.toString() !== request.params.id.toString()
  );
  await user.save();
  response.status(204).end();
})

blogsRouter.post('/', async (request, response) => {
    // const body = request.body
    const blog = Blog(request.body)

    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    
    if(!token || !decodedToken.id) {
        return response.status(401).json({
            error: 'token is missing or invalid'
        })
    }
    
    const user = await User.findById(decodedToken.id)
    
    // const blog = new Blog({
    //     title: body.title,
    //     author: body.author,
    //     url: body.url,
    //     likes: body.likes || 0,
    //     user: user._id
    // })

    if (!blog.url || !blog.title) {
        return response.status(400).send({ error: 'Title or URL missing ' });
      }
    
      if (!blog.likes) {
        blog.likes = 0;
      }
    
      blog.user = user;
      const savedBlog = await blog.save();
    
      user.blogs = user.blogs.concat(savedBlog._id);
      await user.save();
    
      response.status(201).json(savedBlog);
})

module.exports = blogsRouter