import {AddHeroes ,getheroes,getheroesName
    ,deleteheroes,updateheroes
} from "../controladores/heroesController.js"

const routee = (app) =>{
app.route('/heroes').get(getheroes)
.post(AddHeroes)

app.route('/heroes/:id').get(getheroesName)
.put(updateheroes).delete(deleteheroes)
}
export default routee