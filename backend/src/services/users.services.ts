import { NextFunction } from 'express'
import usersRepository from '../DB/Repository/repoUsers'
const users = new usersRepository()

export const signUp = async (username:string, password:string) => {
	return await users.signUp(username, password)
}
export const signIn = async (username:string, password:string) => {
	return await users.signIn(username, password)
}

export const verifyToken = async (token:string, next: NextFunction)=>{
	return await users.verifyToken(token, next)
}
