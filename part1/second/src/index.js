import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const Statistics = ({ text, statistics }) => {
  return (
    <div>
      {text} {statistics} <br />
    </div>
  )
}

const buttonStyle = {
  display: 'inline-block',
}

const Button = ({ handleClick, text }) => {
  return (
    <div style={buttonStyle}>
      <button onClick={handleClick}>
        {text}
      </button>
    </div>
  )
}

const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)
 
  const handleGoodClicks = () => setGood(good + 1)
  const handleNeutralClicks = () => setNeutral(neutral + 1)
  const handleBadClicks = () => setBad(bad + 1)

  if(good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <h1>give your feed back</h1>
        <Button handleClick={handleGoodClicks} text='good' />
        <Button handleClick={handleNeutralClicks} text='neutral' />
        <Button handleClick={handleBadClicks} text='bad' />
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>give your feed back</h1>
      <Button handleClick={handleGoodClicks} text='good' />
      <Button handleClick={handleNeutralClicks} text='neutral' /> 
      <Button handleClick={handleBadClicks} text='bad' />

      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td><Statistics text="good" /></td>
            <td>{good}</td>
          </tr>
          <tr>
            <td><Statistics text="neutral" /></td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td><Statistics text="bad" /></td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>all</td>
            <td>{good + neutral + bad}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{(1 * good + 0 * neutral + (-1) * bad) / (good + neutral + bad)}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{good / (good + neutral + bad) * 100} %</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))