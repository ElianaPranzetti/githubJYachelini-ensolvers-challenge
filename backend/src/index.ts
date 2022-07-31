import { env } from './config/env'
import app from './server/app'
import './DB/db'

app.listen(app.get('port'), () => {
	console.log(`Server on port ${app.get('port')}`)
})
