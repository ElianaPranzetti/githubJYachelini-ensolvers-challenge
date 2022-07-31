import UserModel from '../../../Models/UserModel'
import bcrypt from 'bcryptjs'

export default class daoUsers {
	private collection
	constructor() {
		this.collection = UserModel
	}

	register = async (username:string, password:string ) => {
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
					const hashedPassword = await bcrypt.hash(password, 10)
					const newUser = new this.collection({
						username,
						password: hashedPassword,
					})
					await newUser.save()
					return true
				}
			})
	}
}
