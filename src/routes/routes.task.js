import { Router } from "express";
import { createTask, deleteTask, getAllTask, getIdTask, updateTask } from "../controllers/task.controllers.js";

const routes = Router()

routes.get('/task',getAllTask)
routes.post('/task',createTask)
routes.put('/task/:id',updateTask)
routes.delete('/task/:id',deleteTask)
routes.get('/task/:id',getIdTask)


export default routes