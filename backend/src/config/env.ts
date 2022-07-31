import dotenv from 'dotenv'

dotenv.config()

export const env = {
	PORT: process.env.PORT || 8080,
	NODE_ENV: process.env.NODE_ENV,
	FRONTEND: process.env.FRONTEND || '*',
	MONGODB: `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@ensolvers-app.05gra.mongodb.net/?retryWrites=true&w=majority`
}
