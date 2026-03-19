// import the mongoose to help with the connection
import {mongoose} from 'mongoose'
import 'dotenv/config'

// store the connection string to a variable
const uri = process.env.MONGO_URI


// make an async function to handle the connection and any errors
async function conncetDB() {
    try{
        await mongoose.connect(uri)
        console.log('MongoDB connected')
    }catch(e){
        console.error(e)
    }
}

conncetDB()