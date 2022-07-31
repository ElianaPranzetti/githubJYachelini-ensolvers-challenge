import { Request, Response } from 'express'
import { DatabaseUserInterface } from '../Interfaces/UserInterfaces'
import * as services from '../services/users.services'

export const register = async (req: Request, res: Response) => {
	const {username, password}= req.body
	res.send(await services.register(username, password))
}
