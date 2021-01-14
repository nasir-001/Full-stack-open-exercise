const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
    {
        "title": "This is the blog title number one",
        "author": "Nasir Lawal",
        "url": "wwww.google.com",
        "likes": 5,
        "id": "5fba92fc8c9a552c28b4a2f6"
      },
      {
        "title": "This is blog title number two",
        "author": "Tony Abrucci",
        "url": "wwww.google.com",
        "likes": 2,
        "id": "5fba934d8c9a552c28b4a2f7"
      },
      {
        "title": "This is blog title number two",
        "author": "Ada Lovalace",
        "url": "wwww.google.com",
        "likes": 2,
        "id": "5fbaca14beacd22b80595f9b"
      }
]

const nonExistingTitle = async () => {
    const blog = await Blog({ 
        author: 'John Abbrucci',
        url: 'www.google.com',
        likes: 0,
        id: '12sds12345'
    })
    await blog.save()
    await blog.remove()

    return blog._id.toString()
}

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}

module.exports = {
    initialBlogs,
    blogsInDb,
    nonExistingTitle,
    usersInDb
}