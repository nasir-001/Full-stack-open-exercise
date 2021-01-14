require("dotenv").config()

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

if(process.NODE_ENV === 'test') {
    MONGODB_URI = process.env.TEST_MONGODB_URI
}

module.exports = {
    MONGODB_URI,
    PORT
}