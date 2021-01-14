import React, { useState, useEffect } from 'react';
import Person from './components/Person';
import Notification from './components/Notification';
import Error from './components/Error';
import personDetails from './services/person';

const App = (props) => {
    const [search, setSearch] = useState('')
    
    const { name, number } = props;
    const [ successMessage, setSuccessMessage ] = useState(null)
    const [ errorMessage, setErrorMessage ] = useState(null)
    const [ persons, setPersons ] = useState([]);
    const [ input, setInput ] = useState({
      name: "",
      number: ""
    });
    // const count = persons.length

    useEffect(() => {
      personDetails
        .allPersons()
        .then(response => {
          setPersons(response.data)
        })
    }, [])
  
    const addPerson = input => {      

      setPersons([...persons, { name: input.name, number: input.number }]);
      setInput({ name: "", number: "" });

      personDetails
        .createPerson(input)
        .then(response => {
          setPersons(persons.concat(response.data))
          setSuccessMessage(`Added ${response.data.name}`);
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
        })

    };

    const handleSubmit = (e) => {
      e.preventDefault();
  
      const existingPerson = persons.find((s) => s.name === input.name);
      if (existingPerson) {
        if (
          window.confirm(
            `${existingPerson.name} is already in the phonebook, replace the old number with a new one?`
          ) === true
        ) {
          personDetails
            .editPerson(existingPerson.id, input)
            .then((response) => {
            setPersons((prev) => [
              ...prev.filter((p) => p.id !== response.id),
              response
            ]);
            })
            .catch(error => {
              setErrorMessage(
                `Information of this user has already remove from server`
              )
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000)
            })
        }
      } else {
        addPerson(input);
      }
    };

    const handleChange = e => {
      setInput({
        ...input,
        [e.target.name]: e.target.value
      });
    };
    const filteredPeople = persons.filter(person => {
      return person.name.toLowerCase().includes(search.toLowerCase())
    })
    return (
      <div>
          <p>Note: everything works on refreshing the page!</p>
        <h1>Phonebook</h1>
        <Notification message={successMessage} />
        <Error message={errorMessage} />
        <div style={{ display: 'flex' }}>
          <div>filter shown with</div>
          <input type="text" placeholder="Search..." onChange={e => setSearch(e.target.value)} />
          
        </div>
        <h1>add a new</h1>
        <form onSubmit={handleSubmit}>
          <div>
            name: 
            <input
              name="name"
              type="text"
              value={name}
              onChange={handleChange}
            /><br />
            number: 
            <input
              name="number"
              type="text"
              value={number}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h1>Numbers</h1>
        <li>
          {filteredPeople.map(person => 
            <Person handleChange={handleChange} 
              handleSubmit={handleSubmit} 
              addPerson={addPerson} 
              input={props}
              key={person.number} 
              person={person}
            />
          )}
        </li><br />
      </div>
    )
  }

export default App;