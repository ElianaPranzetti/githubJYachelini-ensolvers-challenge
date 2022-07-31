import { Request, Response, Router } from 'express'
import passport from 'passport'
import * as controller from '../controllers/users.controller'

export const routerAuthentication = Router()

routerAuthentication.post('/register', controller.register)

routerAuthentication.post('/login', passport.authenticate('local'), (req, res) => {
	res.send('success')
})

routerAuthentication.get('/user', (req, res) => {
	if (req.user) res.send(req.user)
    res.send(false)
})

routerAuthentication.get('/logout', (req, res, next) => {
	req.logout((err) => {
		return next(err)
	})
	res.send('success')
})
