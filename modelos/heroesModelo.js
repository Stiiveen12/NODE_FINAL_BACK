import mongoose  from "mongoose"

const schema  = mongoose.Schema

const heroesShema = new schema({
    nombreHeroe:{
        type:String,
        required:'Nombre vacio'
    },
    poderes:{
        type:String,
        required:'apellido vacio'
    },
    
    
})
export default heroesShema