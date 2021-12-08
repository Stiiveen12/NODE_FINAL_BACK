import express from "express";
import routee from "./rutas/rutas.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors'
const app = express()


// Configuracion de conexion 
app.use(cors({
    origin: '*'
}));
mongoose.connect('mongodb://localhost/Contacto',{
   useNewUrlParser:true,
   useUnifiedTopology:true
})
// Configuramos el body parser paara json exclusivamente

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
// Utilizar el routee
routee(app)
app.listen(5000 ,()=>{
    console.log("Servidor Inicializado en el puerto 5000")
})