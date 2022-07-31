import mongoose from 'mongoose'

const user = new mongoose.Schema(
	{
		username: { type: String, required: true, max: 30 },
		password: { type: String, required: true, max: 32 },
	},
	{ timestamps: true }
)

export default mongoose.model('users', user)
