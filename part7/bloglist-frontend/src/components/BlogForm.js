import React, { useState } from 'react';
import styled from 'styled-components'

const Input = styled.input `
  padding: 0.25em;
  font-size: 1.5em;
`

const Form = styled.div `
  padding: 0.25em 12em;
`

const Title = styled.h2 `
  padding: 0em 6em;
  color: Chocolate;
  font-size: 2em
`

const Label = styled.div `
  margin-bottom: 1em;
  margin-top: 1em;
`  

const Button = styled.button`
  background: Bisque;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid Chocolate;
  border-radius: 3px;
`

const BlogForm = ({ handleNewBlogSubmit }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  const submitBlog = () => {
    handleNewBlogSubmit(title, author, url);
    setTitle('');
    setAuthor('');
    setUrl('');
  };

  return (
    <div>
      <Title>Create New Blog</Title>
      <Form>
        <div>
          <Label>
            Title
          </Label>
          <Input
            type="text"
            id="title"
            value={title}
            name="Title"
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          <Label>
            Author
          </Label>
          <Input
            type="text"
            id="author"
            value={author}
            name="Author"
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          <Label>
            URL
          </Label>
          <Input
            type="text"
            id="url"
            value={url}
            name="URL"
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <Button type="button" onClick={submitBlog}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BlogForm;
