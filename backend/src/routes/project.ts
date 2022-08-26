import express from 'express'
import { addColaborator, allProjects, createProject, deleteColaborator, deleteProject, getProject, updateProject } from '../controllers/project'
import { isLogged } from '../middlewares'

const Router = express.Router()

Router.get('/all', isLogged, allProjects)
Router.get('/:id', isLogged, getProject)
Router.post('/', isLogged, createProject)
Router.put('/:id', isLogged, updateProject)
Router.patch('/addcolaborator/:id', isLogged, addColaborator)
Router.patch('/deletecolaborator/:id', isLogged, deleteColaborator)
Router.delete('/:id', isLogged,  deleteProject)

export default Router