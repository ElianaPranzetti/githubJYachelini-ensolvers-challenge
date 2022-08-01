import { Request, Response } from 'express'
import { DatabaseUserInterface } from '../Interfaces/UserInterfaces'
import * as services from '../services/users.services'

export const signUp = async (req: Request, res: Response) => {
	const { username, password }: DatabaseUserInterface = req.body

	res.send(await services.signUp(username, password))
}
export const signIn = async (req: Request, res: Response) => {
	const { username, password }: DatabaseUserInterface = req.body

	res.send(await services.signIn(username, password))
}
