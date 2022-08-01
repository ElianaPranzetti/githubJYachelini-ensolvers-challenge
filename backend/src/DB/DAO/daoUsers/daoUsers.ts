import UserModel from '../../../Models/UserModel'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { env } from '../../../config/env'
import { DatabaseUserInterface } from '../../../Interfaces/UserInterfaces'
import { NextFunction } from 'express'

export default class daoUsers {
	private collection
	constructor() {
		this.collection = UserModel
	}

	signUp = async (username: string, password: string) => {
		const verifyUser: boolean = !username || !password || typeof username !== 'string' || typeof password !== 'string'
		if (verifyUser) {
			return 'invalid credentials'
		}

		return await this.collection
			.findOne({ username })
			.catch((err) => {
				throw err
			})
			.then(async (doc) => {
				if (doc) {
					return 'username exist'
				} else if (!doc) {
					const salt = await bcrypt.genSalt(10)
					const hashedPassword = await bcrypt.hash(password, salt)
					const newUser = new this.collection({
						username,
						password: hashedPassword,
					})
					await newUser.save()
					const token = jwt.sign({ id: newUser._id }, env.SECRET, {
						expiresIn: 86400,
					})
					return token
				}
			})
	}

	signIn = async (username: string, password: string) => {
		const userFound: DatabaseUserInterface | null = await this.collection.findOne({ username })

		if (!userFound) return 'User not found'

		const matchPassword = await bcrypt.compare(password, userFound.password)

		if (!matchPassword) return 'Invalid password'

		const token = jwt.sign({ id: userFound._id }, env.SECRET, {
			expiresIn: 86400,
		})

		return token
	}

	verifyToken = async (token: string, next: NextFunction) => {
		try {
			if (!token) return 'No token provided'

			const decoded: any = jwt.verify(token, env.SECRET)

			const user = await this.collection.findById(decoded.id, { password: 0 })
			if (!user) return 'No use found'

			next()
		} catch {
			return 'Unauthorized'
		}
	}
}
