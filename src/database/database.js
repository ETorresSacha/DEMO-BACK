//! SE CREA LA CONECCIÓN CON LA BASE DE DATOS
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('demo1','postgres','123456',{
    host:'localhost',
    dialect:'postgres'
})