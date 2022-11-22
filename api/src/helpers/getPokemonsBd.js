const {Pokemon, Type} = require('../db')

const getPokemonsBd = async()=>{

    return Pokemon.findAll({
        include :{
            model: Type,
            attributes: ["name"],
            through: {
                attributes:[]
            }
         }
    })
}

module.exports = {getPokemonsBd}