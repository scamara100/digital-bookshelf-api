import express from 'express'
import 'dotenv/config'
import mongoose from 'mongoose'
import './db/connection.js'
import bookRoutes from './routes/bookRoutes.js'

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/', bookRoutes)

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, () => {
    console.log('Server is listening to port: ', PORT)
})