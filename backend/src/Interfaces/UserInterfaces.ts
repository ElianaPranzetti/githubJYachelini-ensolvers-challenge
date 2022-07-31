import { ObjectId } from "mongoose"

export interface UserInterface {
	username: string
}

export interface DatabaseUserInterface {
	username: string
	password: string
	_id?: ObjectId
}
