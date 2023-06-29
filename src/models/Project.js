import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Task } from "./Task.js";


export  const Project=sequelize.define('projects',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    },
    priority:{
        type:DataTypes.INTEGER
    },
    description:{
        type:DataTypes.STRING
    }
},{timestamps:false})

//! RELACIÓN ENTRE TABLAS
// Una forma
//Project.hasMany(Task)

// Otra forma
Project.hasMany(Task,{
    foreignKey:'projectId', // el foreigKey es una columna que se crea de manera automática en la tabla "task"
    sourceKey:'id'         //  y se relaciona con el id de la tabla "projects"
})
Task.belongsTo(Project,{
    foreignKey:'projectId',
    targetId:'id'
})