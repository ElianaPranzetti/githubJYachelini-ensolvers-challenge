import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

interface userModel {
	username: string
	password: string
	encryptPassword: (password: string) => Promise<string>
	comparePassword: (password: string, receivedPassword: string) => Promise<boolean>
	
}

const user: any = new Schema(
	{
		username: { type: String, required: true, max: 30 },
		password: { type: String, required: true, max: 32 },
	},
	{ timestamps: true }
)

user.statics.encryptPassword = async (password: string) => {
	const salt = await bcrypt.genSalt(10)
	return await bcrypt.hash(password, salt)
}

user.statics.comparePassword = async (password: string, receivedPassword: string) => {
	return await bcrypt.compare(password, receivedPassword)
}

export default model('users', user)
