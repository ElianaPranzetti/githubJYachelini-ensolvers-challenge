import { ObjectId } from 'mongoose'
import { notesRepository } from '../DB/Repository/repoNotes'
import { NoteInterface } from '../Interfaces/NoteInterfaces'

const notes = new notesRepository()

export const createNote = async (note: NoteInterface) => {
	return await notes.createNote(note)
}

export const addCategory = async (_id: ObjectId, categories: string[]) => {
	return await notes.addCategory(_id, categories)
}
export const removeCategory = async (_id: ObjectId, category: string[]) => {
	return await notes.removeCategory(_id, category)
}

export const listUnarchivedNotes = async () => {
	return await notes.listUnarchivedNotes()
}

export const listArchivedNotes = async () => {
	return await notes.listArchivedNotes()
}

export const editNote = async (_id: ObjectId, newValues: NoteInterface) => {
	return await notes.editNote(_id, newValues)
}

export const deleteNote = async (_id: ObjectId) => {
	return await notes.deleteNote(_id)
}

export const toggleArchiveNote = async (_id: ObjectId, archived: boolean) => {
	return await notes.toggleArchiveNote(_id, archived)
}

export const filterByCategory = async (categories: string[]) => {
	return await notes.filterByCategory(categories)
}


