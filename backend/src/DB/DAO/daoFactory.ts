import daoNotes from './daoNotes/daoNotes'
import daoUsers from './daoUsers/daoUsers'

const note = new daoNotes()
const user = new daoUsers()

export default class daoFactory {
	static getDaoNote() {
		return note
	}
	static getDaoUser() {
		return user
	}
}
