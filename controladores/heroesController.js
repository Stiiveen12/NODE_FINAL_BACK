import mongoose from 'mongoose'
import heroesShema from '../modelos/heroesModelo.js'


 const Heroes = mongoose.model('Heroes', heroesShema)

 export const AddHeroes = (request, response)=>{
    console.log(request.body)
    let nuevoC=  new Heroes (request.body)
    nuevoC.save((error, Heroes)=>{
        if(error){
            response.send(error)
        }else{
            response.json(Heroes)
        }
    })
}
export const getheroes=(resq,res)=>{
    Heroes.find({},(error,heroes)=>{
        if(error){
          res.send(error)
        }else{
            res.json(heroes)
        }
    })
}
export const getheroesName=(resq,res)=>{
    Heroes.findById(resq.params.id,(error,heroes)=>{
        if(error){
          res.send('Heroes no encontrado')
        }else{
            res.json(heroes)
        }
    })
}
export const deleteheroes=(resq,res)=>{
    console.log(resq.params.id)
    Heroes.deleteOne({_id:resq.params.id},(error,heroes)=>{
        if(error){
          res.send('Heroes no eliminado', error)
        }else{
            res.json('Heroes Eliminado')
        }
    })
}

// Actualizar un Heroes 
export const updateheroes =(resq, res)=>{
    Heroes.findOneAndUpdate({_id:resq.params.id},
        resq.body,
        {new:true},
        (error, heroes)=>{
            if(error){
                res.send(error)
            }else{
                res.json(heroes)
            }
        }
        )
}