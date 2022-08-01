import express from 'express'
// Env
import { env } from '../config/env'

// Middlewares
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors({ origin: ['http://localhost:4173', 'http://localhost:5173'], credentials: true }))

// Routes
import { routerNotes } from '../Routes/routerNotes'
import { routerAuth } from '../Routes/routerAuthentication'

app.use('/api', routerNotes)
app.use('/api', routerAuth)

app.set('port', env.PORT)

export default app
