import { Project } from "../db/project"

export const findProject = async (_id: object) => {

    const project = await Project.findById(_id)
    
    return project
}

export const findAllProjects = async () => {

    const projects = await Project.find({title: 'project1'})
    
    return projects
}

export const addProject = async (project: object) => {
    
    const newProject = new Project(project)
    await newProject.save()

    return
}
