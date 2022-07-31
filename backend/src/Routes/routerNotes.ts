import { Router } from 'express'
import * as controller from '../controllers/notes.controller'

export const routerNotes = Router()

routerNotes.route('/notes').get(controller.listNotes).post(controller.createNote)

routerNotes.route('/notes/archive').post(controller.toggleArchiveNote)

routerNotes.route('/notes/edit').post(controller.editNote)

routerNotes.route('/notes/category').post(controller.filterByCategory)

routerNotes.route('/notes/category/add').post(controller.addCategory)

routerNotes.route('/notes/category/remove').post(controller.removeCategory)

routerNotes.route('/notes/delete').post(controller.deleteNote)
