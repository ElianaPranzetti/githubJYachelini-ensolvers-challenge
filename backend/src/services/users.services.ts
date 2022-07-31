import { DatabaseUserInterface } from '../Interfaces/UserInterfaces'
import usersRepository from '../DB/Repository/repoUsers'
const users = new usersRepository()

export const register = async (username:string, password:string) => {
	return await users.register(username, password)
}
