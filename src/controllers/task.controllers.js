import { Task } from "../models/Task.js";

//! GET ALL
export const getAllTask = async(req,res)=>{
    try {
        const task = await Task.findAll() // Esto es para TRAER todos las filas de la tabla project
        return res.status(200).json(task)
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }

}

//! CREAR
export const createTask =async(req,res)=>{
    const {name,done,projectId} = req.body
    console.log("esto es task",Task)
    try {
        const newProjects = await Task.create({ // Esto es para AGREGAR una nueva fila al proyecto
            name,
            done,
            projectId
        })
        return res.status(200).json(newProjects)
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

//! ELIMINAR
export const deleteTask =async(req,res)=>{
    const {id} = req.params
    try {
        const deleteTasks = await Task.destroy({ // Esto es para ELIMINAR una fila de la tabla
            where:{id}
        })
        return res.status(200).send("Se eliminó correctamente")
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

//! MODIFICAR 
//TODO-->OJO: Cuando se modifica el orden cambia, eso no debe de ocurrir
export const updateTask =async(req,res)=>{

    const {id} = req.params

    try {
        const updatetasks = await Task.findByPk(id) // Esto es para BUSCAR una fila por su "id", tambien se puede modificar por dato especifico (findOne)

             
            updatetasks.set(req.body)  //todo--> "set(req.body)"-->Es otra forma de modificar, con este metodo se no es necesario pasarlo todos los datos para modificar
            await updatetasks.save() // para guardar los cambios en la base de datos

         return res.status(200).json(updatetasks)
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

//! LLAMAR POR ID
export const getIdTask =async(req,res)=>{
    const {id} = req.params
    try {
        const updateTask = await Task.findOne({  // Es para BUSCAR una fila por una caracter en este caso es por su id
            where:{id}                       // Esto hace referencia a id:id
        }) 

        if(!updateTask)                 // Cuando no existe el dato requerido
            return res.status(404).json({error:"project does not exists"})

         return res.status(200).json(updateTask)
        
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}