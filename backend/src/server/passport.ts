import passport from 'passport'
import passportLocal from 'passport-local'
import UserModel from '../Models/UserModel'
import bcrypt from 'bcryptjs'
import { UserInterface } from '../Interfaces/UserInterfaces'

const LocalStrategy = passportLocal.Strategy

export const authentication = async (app: any) => {
	passport.use(
		new LocalStrategy(async (username: string, password: string, done) => {
			await UserModel.findOne({ username })
				.catch((err) => {
					throw err
				})
				.then((user) => {
					if (!user) return done(null, false)
					bcrypt
						.compare(password, user.password)
						.catch((err) => {
							throw err
						})
						.then((result: any) => {
							if (result === true) {
								return done(null, user)
							} else {
								return done(null, false)
							}
						})
				})
		})
	)

	passport.serializeUser((user: any, cb) => {
		cb(null, user._id)
	})

	passport.deserializeUser(async (_id: string, cb) => {
		await UserModel.findOne({ _id })
			.catch((err) => {
				cb(err, false)
			})
			.then((user) => {
				const userInformation: UserInterface = {
					username: user!.username,
				}
				cb(null, userInformation)
			})
	})

	app.use(passport.initialize())
	app.use(passport.session())
}
