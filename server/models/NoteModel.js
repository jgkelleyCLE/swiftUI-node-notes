import mongoose from 'mongoose'

const NoteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Note = mongoose.model('Note', NoteSchema)

export default Note