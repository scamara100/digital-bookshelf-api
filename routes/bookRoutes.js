import express from 'express'
import Book from '../models/Book.js'

const router = express.Router()

// /api/books 

router.post('/', async(req, res) => {
    try{
        // create a new document and save it to the DB
        const newBook = await Book.create(req.body)
        console.log(newBook)
        // status 201 means we created a resource successfully
        res.status(201).json(newBook)
    } catch(e){
        res.status(400).json({message: e.message})
    }
})

router.get('/', async (req, res) => {
    try{
        // retrieve all document from the products collection
        const Books = await Book.find({})
        res.status(200).json(Books)
    } catch(e){
        res.status(500).json({message: e.message})
    }
})

router.get('/:id', async (req, res) => {
    try{
        // Retrieves a single book by its _id
        const oneBook = await Book.findById(req.params.id)
        res.status(200).json(oneBook)
    } catch(e){
        res.status(400).json({message: e.message})
    }
})

router.put('/:id', async (req, res) => {
    try{
        // store the request body in a variable called id
        const id = req.params.id
        // pass the id to the method for finding and updating a document
        const updatedBook = await Book.findByIdAndUpdate(id, req.body)
        // when no book with that id is found, the returned value is null (falsey)
        if (!updatedBook) {
            return res.status(404).json({ message: `No Book with ${id} found` })
        }
        res.status(200).json({ message: `Book with ${id} updated successfully` })
    } catch(e){
        res.status(400).json({message: e.message})
    }
})  

router.delete('/:id', async (req, res) => {
   try {
        // store the parameter in a convenient variable called id
        const id = req.params.id
        // pass the id to the method for finding and deleting a document
        const deletedBook = await Book.findByIdAndDelete(id)
        // when no Book with that id is found, the returned value is null (falsey)
        if (!deletedBook) {
            return res.status(404).json({ message: `No Book with ${id} found` })
        }
        res.status(200).json({ message: `Book with ${id} deleted successfully` })
    } catch (e) {
        res.status(400).json({ message: e.message })
    }
})

export default router