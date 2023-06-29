import { Router } from "express";
import { getAllProjects,createProjects,deleteProject,updateProject,getIdProject, getIdProjectTask} from "../controllers/projects.controllers.js";

const routes = Router()

routes.get('/projects',getAllProjects)
routes.post('/projects',createProjects)
routes.put('/projects/:id',updateProject)
routes.delete('/projects/:id',deleteProject)
routes.get('/projects/:id',getIdProject)

//! RELACIONANDO LA TABLA PROJECT CON TASK
// Se leeria: del proyecto con el id dado quiero las tareas "es mejor hacer la ruta en projects, porque en el task su entendimiento es mas complejo"

// Las tareas del project
routes.get('/projects/:id/task',getIdProjectTask)


export default routes
