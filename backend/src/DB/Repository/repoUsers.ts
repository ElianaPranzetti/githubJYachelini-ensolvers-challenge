import { NextFunction } from 'express'
import { DatabaseUserInterface } from '../../Interfaces/UserInterfaces'
import daoFactory from '../DAO/daoFactory'

export default class usersRepository {
	private dao
	constructor() {
		this.dao = daoFactory.getDaoUser()
	}

	signUp = async (username:string, password:string) => {
		return await this.dao.signUp(username, password)
	}

	signIn = async(username:string,password:string)=>{
		return await this.dao.signIn(username,password)
	}

	verifyToken = async(token:string, next:NextFunction)=>{
		return await this.dao.verifyToken(token, next)
	}
}
