import {Project} from '../models/Project.js' // aqui se encuentra la tabla "Project"
import { Task } from '../models/Task.js'

//! GET ALL
export const getAllProjects = async(req,res)=>{
    try {
        const projects = await Project.findAll() // Esto es para TRAER todos las filas de la tabla project
        return res.status(200).json(projects)
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }

}

//! CREAR
export const createProjects =async(req,res)=>{
    const {name,priority, description} = req.body
    try {
        const newProjects = await Project.create({ // Esto es para AGREGAR una nueva fila al proyecto
            name,
            description,
            priority
        })
        return res.status(200).json(newProjects)
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

//! ELIMINAR
export const deleteProject =async(req,res)=>{
    const {id} = req.params
    try {
        const deleteProjects = await Project.destroy({ // Esto es para ELIMINAR una fila de la tabla
            where:{id}
        })
        return res.status(200).send("Se eliminó correctamente")
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

//! MODIFICAR 
//TODO-->OJO: Cuando se modifica el orden cambia, eso no debe de ocurrir
export const updateProject =async(req,res)=>{
    const {id} = req.params
    const {name,priority, description} = req.body
    try {
        const updateProjects = await Project.findByPk(id) // Esto es para BUSCAR una fila por su "id", tambien se puede modificar por dato especifico (findOne)
            updateProjects.name=name
            updateProjects.priority=priority
            updateProjects.description=description
            
            await updateProjects.save() // para guardar los cambios en la base de datos

         return res.status(200).json(updateProjects)
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

//! LLAMAR POR ID
export const getIdProject =async(req,res)=>{
    const {id} = req.params
    try {
        const updateProjects = await Project.findOne({  // Es para BUSCAR una fila por una caracter en este caso es por su id
            where:{id}                       // Esto hace referencia a id:id
        }) 

        if(!updateProjects)                 // Cuando no existe el dato requerido
            return res.status(404).json({error:"project does not exists"})

         return res.status(200).json(updateProjects)
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

//! TABLA RELACIONADO 
//TODO--> No esta manejando los errores, verificar
export const getIdProjectTask = async(req,res)=>{
    const {id}=req.params
    try {
        const taskOfProjects =await Task.findAll({
            where:{projectId:id}})
        
        if(!taskOfProjects)
            return res.status(400).json({error:"Task does not existe"})
        
        return res.status(200).json(taskOfProjects)

        
    } catch (error) {
        return res.status(400).json({error:error.message})
        
    }
}