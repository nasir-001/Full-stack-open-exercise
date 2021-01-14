import React, { useState } from 'react';
import styled from 'styled-components';

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

  const Logout = styled.button`
      background: Red;
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid Black;
      border-radius: 3px;
    `

const LoginForm = ({ user, loginHandler, logoutHandler }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (!user) {
    return (
      <div>
        <Title>Log in to application</Title>
        <form>
          <Form>
            <div>
              <Label>
                Username:
              </Label>
              <Input 
              type="text"
              id="username"
              value={username} 
              name="Username" 
              onChange={({ target }) => setUsername(target.value)} />
            </div>
            <div>
              <Label>
                Password:
              </Label>
              <Input
                type="password"
                id="password"
                value={password}
                name="Password"
                onChange={({ target }) => setPassword(target.value)}
              />
            </div>
            <Button type="button" id="login-button" onClick={() => loginHandler(username, password)}>login</Button>

          </Form>
        </form>
      </div>
    );
  }

  return (
    <div>
      {`${user.username} logged in.`}{' '}
      <Logout type="button" onClick={() => logoutHandler()}>
        Logout
      </Logout>
    </div>
  );
};

export default LoginForm;
