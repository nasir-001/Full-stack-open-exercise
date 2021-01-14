import React, { useState, useEffect } from 'react';
import blogService from '../services/blogs';
import Blog from './Blog';
import BlogForm from './BlogForm';
import Togglable from './Togglable';
import Notification from '../components/Notification';
import Success from '../components/Success';

const Blogs = ({ user }) => {
  const [blogs, setBlogs] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const sortedBlogs = blogs.sort((a, b) => b.likes - a.likes);
  const blogFormRef = React.createRef();

  const handleNewBlogSubmit = async (title, author, url) => {
    try {
      blogFormRef.current.toggleVisibility();
      const newBlog = { title, author, url };
      const returnedBlog = await blogService.create(newBlog);
      setBlogs(blogs.concat(returnedBlog));
        setSuccessMessage(`A new blog "${title}" by "${author}" has been added `)
        setTimeout(() => {
            setSuccessMessage(null)
        }, 5000)    
    } catch (exception) {
        setErrorMessage('Something went wrong')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
    }
  };

  const handleDeleteBlog = async (blog) => {
    if (window.confirm(`Are you sure you want to delete blog "${blog.title}"?`))
      try {
        await blogService.remove(blog.id);
        setBlogs(await blogService.getAll());
        setSuccessMessage(`Blog "${blog.title}" successfully removed`)
            setTimeout(() => {
                setSuccessMessage(null)
            }, 5000)
      } catch (exception) {
        setErrorMessage('Something went wrong')
            setTimeout(() => {
                setErrorMessage(null)
            }, 5000)
        }
    };

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  if (user) {
    return (
      <div>
        <Notification message={errorMessage} />
        <Success message={successMessage} />

        <Togglable ref={blogFormRef} buttonLabel="New Blog">
          <BlogForm handleNewBlogSubmit={handleNewBlogSubmit} />
        </Togglable>
        <h2>Blogs</h2>
        {sortedBlogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            user={user}
            removeBlog={handleDeleteBlog}
          />
        ))}
      </div>
    );
  }

  return <div></div>;
};

export default Blogs;
