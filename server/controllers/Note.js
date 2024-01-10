import Note from "../models/NoteModel.js";

export const createNote = async(req, res) => {

    const { text } = req.body

    try {
        
        const note = await Note.create({ text })
        res.status(201).json(note)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

export const getNotes = async(req, res) => {

    try {
        
        const notes = await Note.find()
        res.status(200).json(notes)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

export const getNote = async(req, res) => {

    const id = req.params.id

    try {
        
        const note = await Note.findById(id)
        res.status(200).json(note)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

export const deleteNote = async(req, res) => {

    const id = req.params.id

    try {
        const note = await Note.findByIdAndDelete(id)
        res.status(200).json(note)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

}

export const updateNote = async(req, res) => {

    const id = req.params.id

    const { text } = req.body

    try {
        
        const updatedNote = await Note.findByIdAndUpdate(id, {
            $set: {
                text
            },
        }, {new: true})
        res.status(200).json(updatedNote)

    } catch (error) {
        res.status(400).json({message: error.message})
    }

}