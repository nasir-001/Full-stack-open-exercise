import React from 'react';
import ReactDOM from 'react-dom';
import Course from './components/Course';

const App = () => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("root"))