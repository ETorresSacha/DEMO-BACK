//! SE CONECTA CON LA BASE DE DATOS Y EL SERVIDOR
import  {sequelize}  from './src/database/database.js'; // Para conectar con la base de datos
import app from './src/app.js'; // Para conectar con el servidor
// import './src/models/Project.js' // Tabla projects
// import './src/models/Task.js' // Tabla task


async function main(){
   try {
      //! CONECCIÓN CON LA BASE DE DATOS
      await sequelize.sync({force:false})
      console.log("coneccion con la base de datos correcto")

      //! CONECCIÓN CON EL SERVIDOR
      app.listen(3001,()=>{
         console.log("servidor en el puerto 3001")
      })
      
   } catch (error) {
      console.log("error en la conneccion con la base de datos")
   }

}
main()
 
