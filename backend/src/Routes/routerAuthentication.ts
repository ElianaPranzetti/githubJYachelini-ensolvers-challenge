import { Router } from 'express'
import * as controller from '../controllers/auth.controller'
import { verifyToken } from '../Middlewares'

export const routerAuth = Router()

routerAuth.post('/signup', controller.signUp)
routerAuth.post('/signin', controller.signIn)
