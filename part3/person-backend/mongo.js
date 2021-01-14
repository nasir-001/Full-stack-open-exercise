const mongoose = require('mongoose')
require("dotenv").config();

if (process.argv.length < 5 && process.argv.length > 3) {
    console.log('Please provide appropriate arguments: node mongo.js [password, name, number]');
}

const password = process.argv[2]

const url = process.env.DB_PASSWORD

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => {
        console.log('connected to MongoDB:', url);
    })

const personSchema = new mongoose.Schema({
    name: String,
    number: Number,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person);
        })
        mongoose.connection.close()
    })
}

const name = process.argv[3]
const number = process.argv[4]

const person = new Person({
    name: name,
    number: number,
})

person.save().then(result => {
    console.log(`added ${name} ${number} to phonebook`);
    mongoose.connection.close()
})

