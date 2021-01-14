import React, { useState, useEffect } from 'react';
import blogService from './services/blogs';
import loginService from './services/login';
import LoginForm from './components/LoginForm';
import Blogs from './components/Blogs';
import Notification from './components/Notification';
import Success from './components/Success';

const App = () => {
  const [user, setUser] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async (username, password) => {
    try {
      const user = await loginService.login({
        username,
        password
      });

      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user));

      blogService.setToken(user.token);

      setUser(user);
    } catch (exception) {
      setErrorMessage('Something went wrong')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem('loggedBlogAppUser');
    setSuccessMessage(`${user.username} has been logged out`)
      setTimeout(() => {
        setSuccessMessage(null)
      }, 5000)
    setUser(null);
  };

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  return (
    <div>
      <h2>Blogs List</h2>
      <hr />
      <Notification message={errorMessage} />
      <Success message={successMessage} />
      
      <LoginForm
        user={user}
        loginHandler={handleLogin}
        logoutHandler={handleLogout}
      />
      <Blogs user={user} />
    </div>
  );
};

export default App;
