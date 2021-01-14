import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [ selected, setSelected ] = useState(0)
  const [ votes, setVotes ] = useState(0)
  const points = [0, 0, 0, 0, 0, 0]
  const copy = [...points]
  
  const randomAnectodes = () => setSelected(anecdotes[Math.floor(Math.random() * anecdotes.length)])

  const handleVotes = () => setVotes(votes + 1)

  var index;
  
  const checkVotes = () => {
    for(index = 0; points.length; index++) {
      if (index === anecdotes.indexOf(selected)) {
        copy[index] += votes;
        
      }
      break
    }
    return    
  }

  const { anecdotes } = props

  return (
    <div>
		{selected}<br />
		has {checkVotes()} votes<br />
		<button onClick={handleVotes}>
			vote
		</button>
		<button onClick={randomAnectodes}>
			next anecdote
		</button>
		<h1>Anectodes with most votes</h1>
    </div>
  )
}


ReactDOM.render(<App anecdotes={['If it hurts, do it more often',
'Adding manpower to a late software project makes it later!',
'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
'Premature optimization is the root of all evil.',
'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.']} />,
document.getElementById("root"))
