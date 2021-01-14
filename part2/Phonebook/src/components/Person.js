import React from 'react';
import deleteOne from '../services/person';

const Person = ({id, person}) => {
    const handledelete = () => {
        if (window.confirm(`Delete ${person.name}?`) === true) {
            deleteOne
                .deletePerson(person.id)
                .then(response => {
                    // console.log(response.data);
                })
        } else {
            return
        }
        
    }

    return (
        <div>
            {person.name} {person.number} 
            <button onClick={handledelete}>delete</button>
        </div>
    )
}

export default Person
