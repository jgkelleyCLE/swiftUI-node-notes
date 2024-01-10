import express from 'express'
import { createNote, deleteNote, getNote, getNotes, updateNote } from '../controllers/Note.js'

const router = express.Router()

//create note
router.post('/', createNote)

//get notes
router.get('/', getNotes)

// get single note
router.get('/:id', getNote)

//delete note
router.delete('/:id', deleteNote)

//update note
router.put('/:id', updateNote)

export default router