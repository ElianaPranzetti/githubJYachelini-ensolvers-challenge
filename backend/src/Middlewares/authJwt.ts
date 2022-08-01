import { NextFunction, Request, Response } from 'express'
import * as services from '../services/users.services'

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
	const token: any = req.headers['x-access-token']

	await services.verifyToken(token, next)
}
