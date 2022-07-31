import express from 'express'
// Env
import { env } from '../config/env'

// Middlewares
import passport from 'passport'
import cors from 'cors'
import session from 'express-session'
import cookieParser from 'cookie-parser'

import { authentication } from './passport'

const app = express()

app.use(express.json())
app.use(cors({ origin:['http://localhost:4173','http://localhost:5173'],credentials: true }))
// app.use(session({ secret: 'ensolvers', resave: true, saveUninitialized: true }))
// app.use(cookieParser())
// ;(async () => {
// 	await authentication(app)
// })()

// Routes
import { routerNotes } from '../Routes/routerNotes'
import { routerAuthentication } from '../Routes/routerAuthentication'

app.use(routerNotes)
app.use(routerAuthentication)

app.set('port', env.PORT)

export default app
