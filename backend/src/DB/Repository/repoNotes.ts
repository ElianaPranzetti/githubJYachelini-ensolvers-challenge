import { ObjectId } from 'mongoose'
import { NoteInterface } from '../../Interfaces/NoteInterfaces'
import daoFactory from '../DAO/daoFactory'

export class notesRepository {
	private dao
	constructor() {
		this.dao = daoFactory.getDaoNote()
	}

	createNote = async (note: NoteInterface) => {
		return await this.dao.createNote(note)
	}

	addCategory = async (_id: ObjectId, categories: string[]) => {
		return await this.dao.addCategory(_id, categories)
	}

	removeCategory = async (_id: ObjectId, category: string[]) => {
		return await this.dao.removeCategory(_id, category)
	}

	listUnarchivedNotes = async () => {
		return await this.dao.listUnarchivedNotes()
	}

	listArchivedNotes = async () => {
		return await this.dao.listArchivedNotes()
	}

	editNote = async (_id: ObjectId, newValues: NoteInterface) => {
		return await this.dao.editNote(_id, newValues)
	}

	deleteNote = async (_id: ObjectId) => {
		return await this.dao.deleteNote(_id)
	}

	toggleArchiveNote = async (_id: ObjectId, archived: boolean) => {
		return await this.dao.toggleArchiveNote(_id, archived)
	}

	filterByCategory = async (categories:string[])=>{
		return await this.dao.filterByCategory(categories)
	}
}
