import { DatabaseUserInterface } from '../../Interfaces/UserInterfaces'
import daoFactory from '../DAO/daoFactory'

export default class usersRepository {
	private dao
	constructor() {
		this.dao = daoFactory.getDaoUser()
	}

	register = async (username:string, password:string) => {
		return await this.dao.register(username, password)
	}
}
