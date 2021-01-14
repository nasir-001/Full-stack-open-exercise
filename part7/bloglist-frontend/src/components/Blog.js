import React, { useState } from 'react';
import blogService from '../services/blogs';
import styled from 'styled-components'

const Button = styled.button`
    background: Bisque;
    font-size: 1em;
    margin: 0.25em;
    padding: 0.25em 1em;
    border: 2px solid Chocolate;
    border-radius: 3px;
  `

const Remove = styled.button`
  background: Red;
  font-size: 1em;
  margin: 0.25em;
  padding: 0.25em 1em;
  border: 2px solid Black;
  border-radius: 3px;
`

const Title = styled.h2 `
  margin: 0.25em;
  color: Green;
`

const Url = styled.h2 `
  padding-bottom: 0.25em;
  color: blue;
  text-decoration: underline;
  font-style: italic;
`

const Likes = styled.p `
  font-size: 1em;
  color: blue;
`

const Section = styled.i `
  display: flex;
`

const Author = styled.p `
  font-style: italic;
  color: Chocolate;
  margin: 0.25em;
`

const Blog = ({ user, blog, removeBlog }) => {
  const [showFullBlog, setShowFullBlog] = useState(false);
  const [likes, setLikes] = useState(blog.likes);

  const toggleVisibility = () => {
    setShowFullBlog(!showFullBlog);
  };

  const blogStyle = {
    padding: 10,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 10,
  };

  const increaseLikes = async () => {
    const newBlog = {
      user: blog.user._id,
      likes: likes + 1,
      author: blog.author,
      title: blog.titile,
      url: blog.url
    };

    const returnedBlog = await blogService.update(blog.id, newBlog);
    setLikes(returnedBlog.likes);
  };

  const showDeleteIfCorrectUser = () => {
    if (blog.user.id.toString() === user.id.toString()) {
      return (
        <div>
          <Remove type="burron" onClick={() => removeBlog(blog)}>
            Delete
          </Remove>
        </div>
      );
    }

    return null;
  };

  if (!showFullBlog) {
    return (
      <div style={blogStyle}>
        <Title>{blog.title} by {blog.author}</Title>
        <Button type="button" onClick={toggleVisibility}>
          View
        </Button>
      </div>
    );
  }

  return (
    <div onClick={toggleVisibility} style={blogStyle} className="blogTitle">
      <div>
      <Title>{blog.title} by {blog.author}</Title>
        <Button type="button" onClick={toggleVisibility}>
          Hide
        </Button>
      </div>
      <Url>{blog.url}</Url>
      <Section>
        <Likes>{likes}</Likes>
        <Button type="button" onClick={increaseLikes}>
          Like
        </Button>
      </Section>
      <Author>{blog.author}</Author>
      {showDeleteIfCorrectUser()}
    </div>
  );
};

export default Blog;
