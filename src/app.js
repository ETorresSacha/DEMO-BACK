import express from 'express'
//const express = require('express')
import routesProjects from './routes/routes.projects.js'
import routesTasks from './routes/routes.task.js'


const app = express()
// midwels
app.use(express.json())

// las rutas
app.use(routesProjects)
app.use(routesTasks)


export default app

//module.exports =app