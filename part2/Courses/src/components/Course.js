import React from 'react';


const Header = (props) => {
    return (
      <div>
        <h2>
          {props.course}
        </h2>
      </div>
    )
}

const Part = (props) => {
    return (
        <div>
            {props.part} {props.exercises}
        </div>
    )
}
  
  const Content = () => {
    const course = [
        {
          name: 'Half Stack application development',
          id: 1,
          parts: [
            {
              name: 'Fundamentals of React',
              exercises: 10,
              id: 1
            },
            {
              name: 'Using props to pass data',
              exercises: 7,
              id: 2
            },
            {
              name: 'State of a component',
              exercises: 14,
              id: 3
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        }, 
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]
    
    const total_0 = (course[0].parts).reduce((s, p) => {
        return s + p.exercises
    }, 0)

    const total_1 = (course[1].parts).reduce((s, p) => {
        return s + p.exercises
    }, 0)
    
    return (
      <div>
        <Part part={course[0].parts[0].name} exercises={course[0].parts[0].exercises} /><br />
        <Part part={course[0].parts[1].name} exercises={course[0].parts[1].exercises} /><br />
        <Part part={course[0].parts[2].name} exercises={course[0].parts[2].exercises} /><br />
        <Part part={course[0].parts[3].name} exercises={course[0].parts[3].exercises} /><br />
        <Total exercises={course[0].parts[0].exercises + course[0].parts[1].exercises + 
            course[0].parts[2].exercises + course[0].parts[3].exercises} />
        <b>total of {total_0} exercises from map function</b>
        <h2>{course[1].name}</h2>
        <Part part={course[1].parts[0].name} exercises={course[1].parts[0].exercises} /><br />
        <Part part={course[1].parts[1].name} exercises={course[1].parts[1].exercises} /><br />
        <b>total of {total_1} exercises</b>
      </div>
    )
  }

  const Total = (props) => {
    
    return (
      <div>
        <p>
          total of {props.exercises} exercises from component
        </p>
      </div>
    )
  }
  

const Course = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
    }
      return (
        <div>
          <Header course={course.name} />
          <Content />
        </div>
      )
}

export default Course;