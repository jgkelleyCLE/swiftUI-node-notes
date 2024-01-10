import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import notesRoutes from './routes/NoteRoutes.js'

const app = express()

app.use(express.json())
app.use(cors())

dotenv.config()

const port = process.env.PORT || 3001

//MONGOOSE
mongoose.connect(process.env.MONGO_URI)

let connectionObj = mongoose.connection

connectionObj.on('connected', ()=> {
    console.log('database connected')
})

connectionObj.on('error', ()=> {
    console.log('database ERROR')  
})

//ROUTING
app.use('/api/notes', notesRoutes)

app.listen(port, ()=> {
    console.log(`server is running on port ${port}`)
})