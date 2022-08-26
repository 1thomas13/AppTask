import { addProject, findAllProjects, findProject } from "../repositories/project"
import mongoose from "mongoose"


export const allProjects = async (_req: any, res: any) => {

    const projects = await findAllProjects()
    res.status(200).json({projects})
}

export const getProject = async (req: any, res: any) => {

    const {id} = req.params

    if(!id) return res.status(404).json( {error: 'Project Not Found'})

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json( {error: 'The ID is not valid'} )

    const project = await findProject(id)
    if(!project) return res.status(404).json({ error: 'Project Not Found'} )

    res.status(200).json({msg: project})
}

export const createProject = async (req: any, res: any) => {

    const { title, description } = req.body
   
    if(!title) return res.status(401).json({error: 'Complete the title'})

    const project = {
        title,
        description,
        collaborator: [{
            username: req.data.username,
            email: req.data.username,
            creator: true
        }]
    }
    
    await addProject(project)

    return res.status(201).json({ msg: 'Project created' })
}

export const updateProject = async (req: any, res: any) => {

    const { id } = req.params
    const { title, description } = req.body

    if(!id) return res.status(404).json( {error: 'Project Not Found'})

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json( {error: 'The ID is not valid'} )

    const project = await findProject(id)
    if(!project) return res.status(404).json({ error: 'Project Not Found'} )

    project.title = title || project.title
    project.description = description || project.description
    await project.save()
   
    res.status(200).json({msg: 'project updated'})
}

export const deleteProject = async (req: any, res: any) => {

    const { id } = req.params

    if(!id) return res.status(404).json( {error: 'Project Not Found'})

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json( {error: 'The ID is not valid'} )

    const project = await findProject(id)
    if(!project) return res.status(404).json({ error: 'Project Not Found'} )

    await project.remove()
   
    res.status(200).json({msg: 'project Deleted'})
}

export const addColaborator = (req: any, res: any) => {
    const {id} = req.params

    if(!id) { return res.status(404).json( {error: 'Project Not Found'}) }

    res.status(200).json('update project')
}

export const deleteColaborator = (req: any, res: any) => {
    const {id} = req.params

    if(!id) { return res.status(404).json( {error: 'Project Not Found'}) }

    res.status(200).json('update project')
}