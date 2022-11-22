const { getPokemonsApi } = require("./getPokemonsApi");
const { getPokemonsBd } = require("./getPokemonsBd");

const getAllPokemons = async ()=>{
    const api = await getPokemonsApi();
    const bd = await getPokemonsBd();

    return api.concat(bd);

}
module.exports={
    getAllPokemons
}