const mongoose = require('mongoose')

const url = process.env.DB_PASSWORD

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then(result => {
        console.log('connected to MongoDB:', url);
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message);
    })

if (process.argv.length < 5 && process.argv.length > 3) {
    console.log('Please provide appropriate arguments: node mongo.js [password, name, number]');
}

const personSchema = new mongoose.Schema({
    name: String,
    number: Number,
})

personSchema.path('name').validate(() => {
    return false
}, 'name must be unique')

const Person = mongoose.model('Person', personSchema)

const name = process.argv[3]
const number = process.argv[4]

const person = new Person({
    name: name,
    number: number,
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports = mongoose.model('Person', personSchema)