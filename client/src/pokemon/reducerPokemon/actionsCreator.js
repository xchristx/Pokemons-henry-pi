import { getAllPokemons, getPokemonTypes } from "../helpers";


export const initCharacters = ()=>{

    return async ( dispath)=>{
        dispath({type: 'FETCH_INIT_POKEMONS'})
        try {
            const allPokemons = await getAllPokemons();
            dispath({
                type: 'SUCCESS_FETCH_INIT_POKEMONS',
                payload: allPokemons,
            })
        } catch (error) {
            dispath({
                type: 'ERROR_FETCH_INIT_POKEMONS',
                payload: error
            })
            console.error(error.message);
        }

    }
}

export const orderFunc = (key, order)=>{
    if (order){
        return {
            type: 'ORDER_POKEMONS_ASC',
            payload:{
                key
            }
        }
    }
    return {
        type: 'ORDER_POKEMONS_DESC',
        payload:{
            key
        }
    }
}

export const pokeFilter = (value, type) => (dispath, getState)=>{

    const {allPokemons} = getState().pokemonReducer;
    let filteredPokemon = [];
    
    if (value=== 'All') {
        dispath({type: 'FILTER_BY_CREATION', payload: allPokemons});
        
        if (type=== 'All') return dispath({type: 'FILTER_BY_TYPE', payload: {pokemons: allPokemons, filterType: type, show: value}});
                
        const subfilteredPokemon = allPokemons.filter(pokemon => {
            const pokemonTypes = getPokemonTypes(pokemon.Types); 
            return pokemonTypes.find(el => el === type.toLowerCase());
        });
        return dispath({type: 'FILTER_BY_TYPE', payload: {pokemons: subfilteredPokemon, filterType: type, show: value}});
        
    } 

    if (value === 'Only_Pokedex') {
        filteredPokemon = allPokemons.filter(pokemon => !pokemon.userCreation);
        dispath({type: 'FILTER_BY_CREATION', payload: filteredPokemon});
        
        if (type=== 'All') return dispath({type: 'FILTER_BY_TYPE', payload: {pokemons: filteredPokemon, filterType:type, show: value}});
        
        const subfilteredPokemon = filteredPokemon.filter(pokemon => {
            const pokemonTypes = getPokemonTypes(pokemon.Types); 
            return pokemonTypes.find(el => el === type.toLowerCase());
        });
        return dispath({type: 'FILTER_BY_TYPE', payload: {pokemons: subfilteredPokemon, filterType: type, show: value}});
    }
    
    filteredPokemon = allPokemons.filter(pokemon => pokemon.userCreation);
    
    dispath({type: 'FILTER_BY_CREATION', payload: filteredPokemon});
        
    if (type=== 'All') return dispath({type: 'FILTER_BY_TYPE', payload: {pokemons: filteredPokemon, filterType: type, show: value}});
        
    const subfilteredPokemon = filteredPokemon.filter(pokemon => {
        const pokemonTypes = getPokemonTypes(pokemon.Types); 
        return pokemonTypes.find(el => el === type.toLowerCase());
    });
    return dispath({type: 'FILTER_BY_TYPE', payload: {pokemons: subfilteredPokemon, filterType: type, show: value}});
    
}








// export const filterByType = type => (dispath, getState)=>{

//     const {subFilter} = getState();

    
//     if (type=== 'All') return dispath({type: 'FILTER_BY_TYPE', payload: {pokemons: subFilter, filterType: type}});
    
//     dispath({type: 'UPDATE_POKEMONS'});

//     const {pokemons} = getState();

//     const filteredPokemon = pokemons.filter(pokemon => {
//         const pokemonTypes = getPokemonTypes(pokemon.Types); 
//         return pokemonTypes.find(el => el === type.toLowerCase());
//     });

//     return dispath({type: 'FILTER_BY_TYPE', payload: {pokemons: filteredPokemon, filterType: type}});
// }