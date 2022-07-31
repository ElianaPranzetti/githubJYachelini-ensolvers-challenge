import { ObjectId } from "mongoose"

export interface NoteInterface {
	title: string
	content: string
	category: string[]
    archived?: boolean
}

export interface DatabaseNoteInterface{
    title: string
	content: string
	category: string[]
    archived?: boolean
    _id:ObjectId
}
