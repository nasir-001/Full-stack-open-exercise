/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
const baseUrl = '/api/persons'

const allPersons = () => {
    return axios.get(baseUrl)
}

const createPerson = input => {
    return axios.post(baseUrl, input)
}

const deletePerson = (id, persons) => {
    return axios.delete(`${baseUrl}/${id}`, persons)
}

const editPerson = (id, persons) => {
    return axios.put(`${baseUrl}/${id}`, persons)
}

export default { allPersons, createPerson, deletePerson, editPerson }