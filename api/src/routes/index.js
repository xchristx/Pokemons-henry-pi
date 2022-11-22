const { Router } = require('express');
const fetch = require('node-fetch') ;
const { Op } = require('sequelize');

const { getAllPokemons } = require('../helpers/getAllPokemons');
const { Pokemon, Type } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/pokemons', async( req, res )=>{
    const {name} = req.query;
    const allPokemons = await getAllPokemons();
    if(name){
        const pokemon = allPokemons.filter( el =>el.name.toLowerCase() === name.toLocaleLowerCase());
        pokemon.length > 0
            ?res.send(pokemon)
            :res.status(404).send({msg:"Personaje no encontrado"})
        return;
    }

    res.send(allPokemons)

});

router.get('/pokemons/:id', async(req, res)=>{
    const {id} = req.params;
    const allPokemons = await getAllPokemons();

    const pokemon = allPokemons.filter( el =>el.id == id);
    pokemon.length
        ?res.send(pokemon)
        :res.status(404).send({msg:"Personaje no encontrado"});

} )

router.post('/pokemons', async ( req, res )=>{

    const { name, hp, defense, speed, height, weight, Types, attack } = req.body;

    
    const newPokemon = await Pokemon.create({ name:name.replace(/^\w/, (c) => c.toLocaleLowerCase()), hp, defense, speed, height, weight, attack });

    const typesDb = await Type.findAll({
        where: {
            name: {
                [Op.or]: Types
            }
        }
    } )

    newPokemon.addType(typesDb);

    res.send({msg:"creado correctamente"})
})

router.get('/types', async( req, res )=>{
    const data = await fetch('https://pokeapi.co/api/v2/type/');
    const { results } = await data.json();

    const types = results.map( el=> el.name.replace(/^\w/, (c) => c.toUpperCase()));
    
    types.forEach( el => {
        Type.findOrCreate({
            where:{name:el}
        })
    });

    res.send(await Type.findAll());

})



module.exports = router;
