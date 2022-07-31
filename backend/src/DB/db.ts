import mongoose from 'mongoose'
import {env} from '../config/env'

(async () => {
	try {
		const db = await mongoose.connect(env.MONGODB)
		console.log(`Connected to MongoDB`)
	} catch (error) {
		throw new Error(`${error}`)
	}
})()
