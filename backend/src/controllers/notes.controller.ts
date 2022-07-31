import { Request, Response } from 'express'
import { ObjectId } from 'mongoose'
import { DatabaseNoteInterface, NoteInterface } from '../Interfaces/NoteInterfaces'
import * as services from '../services/notes.services'

export const createNote = async (req: Request, res: Response) => {
	const note: DatabaseNoteInterface = req.body.note
	res.send(await services.createNote(note))
}

export const addCategory = async (req: Request, res: Response) => {
	const _id: ObjectId = req.body._id
	const categories: string[] = req.body.category
	res.send(await services.addCategory(_id, categories))
}

export const removeCategory = async (req: Request, res: Response) => {
	const _id: ObjectId = req.body._id
	const category: string[] = req.body.category
	res.send(await services.removeCategory(_id, category))
}

export const listUnarchivedNotes = async (req: Request, res: Response) => {
	res.send(await services.listUnarchivedNotes())
}

export const listArchivedNotes = async (req: Request, res: Response) => {
	res.send(await services.listArchivedNotes())
}

export const editNote = async (req: Request, res: Response) => {
	const _id: ObjectId = req.body._id
	const newValues: NoteInterface = req.body.newValues
	res.send(await services.editNote(_id, newValues))
}

export const deleteNote = async (req: Request, res: Response) => {
	const _id: ObjectId = req.body._id
	res.send(await services.deleteNote(_id))
}

export const toggleArchiveNote = async (req: Request, res: Response) => {
	const _id: ObjectId = req.body._id
	const archived: boolean = req.body.archived
	res.send(await services.toggleArchiveNote(_id, archived))
}

export const filterByCategory = async (req: Request, res: Response) => {
	const category: string[] = req.body.category
	res.send(await services.filterByCategory(category))
}

