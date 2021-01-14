import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {

  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  
  return (
    <div>
      <p>
        Number of exercises {props.exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    part: [
      {
      name: 'Fundamentals of React',
      exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content part={course.part[0].name} exercises={course.part[0].exercises} />
      <Content part={course.part[1].name} exercises={course.part[1].exercises} />
      <Content part={course.part[2].name} exercises={course.part[2].exercises} />
      <Total exercises={course.part[0].exercises + course.part[1].exercises + course.part[2].exercises} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("root"))