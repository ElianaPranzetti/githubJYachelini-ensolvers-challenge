import { Error, ObjectId } from 'mongoose'
import { DatabaseNoteInterface, NoteInterface } from '../../../Interfaces/NoteInterfaces'
import NotesModel from '../../../Models/NotesModel'

export default class daoNotes {
	private collection
	constructor() {
		this.collection = NotesModel
	}

	createNote = async (note: NoteInterface) => {
		try {
			const newNote = new this.collection(note)
			return await newNote
				.save()
				.catch((error: Error) => {
					return error.message
				})
				.then((doc) => {
					return doc
				})
		} catch (error) {
			throw new Error(`${error}`)
		}
	}

	editNote = async (_id: ObjectId, newValues: NoteInterface) => {
		try {
			return await this.collection
				.findByIdAndUpdate(_id, { title: newValues.title, content: newValues.content, category: newValues.category })
				.catch((error: Error) => {
					return error.message
				})
				.then((doc) => {
					return doc
				})
		} catch (error) {
			throw new Error(`${error}`)
		}
	}

	addCategory = async (_id: ObjectId, categories: string[]) => {
		return await this.collection
			.findByIdAndUpdate(_id, {
				$addToSet: {
					category: categories,
				},
			})
			.catch((error: Error) => {
				return error.message
			})
			.then((doc) => {
				return doc
			})
	}

	removeCategory = async (_id: ObjectId, categories: string[]) => {
		return await this.collection
			.findByIdAndUpdate(_id, {
				$pull: {
					category: categories,
				},
			})
			.catch((error: Error) => {
				return error.message
			})
			.then((doc) => {
				return doc
			})
	}

	deleteNote = async (_id: ObjectId) => {
		try {
			return await this.collection
				.findByIdAndDelete(_id)
				.catch((error: Error) => {
					return error.message
				})
				.then((doc) => {
					return doc
				})
		} catch (error) {
			throw new Error(`${error}`)
		}
	}

	toggleArchiveNote = async (_id: ObjectId, archived: boolean) => {
		try {
			return await this.collection
				.findByIdAndUpdate(_id, { archived })
				.catch((error: Error) => {
					return error.message
				})
				.then((doc) => {
					return doc
				})
		} catch (error) {
			throw new Error(`${error}`)
		}
	}

	listNotes = async () => {
		try {
			return await this.collection
				.find()
				.sort({ updatedAt: -1 })
				.catch((error: Error) => {
					return error.message
				})
				.then((doc) => {
					return doc
				})
		} catch (error) {
			throw new Error(`${error}`)
		}
	}

	filterByCategory = async (categories: string[]) => {
		try {
			const filter = { category: { $in: categories.map((category) => new RegExp(category)) } }
			return this.collection
				.find(filter)
				.catch((error: Error) => {
					return error.message
				})
				.then((doc) => {
					return doc
				})
		} catch (error) {
			throw new Error(`${error}`)
		}
	}
}
