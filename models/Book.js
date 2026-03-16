import mongoose from 'mongoose'

// create a schema for data validation
const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        unique: true
    },
    publishedDate: {type: Date},
    inStock: {
        type: Boolean,
        default: true
    }
})

// create a model that our app uses to interact with our user data
const Book = mongoose.model('Book', booksSchema)

export default Book
