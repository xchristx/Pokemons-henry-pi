

export const getAllPokemons = async() => {

    const AllPokemons = await (await fetch('http://localhost:3001/pokemons')).json();

    return AllPokemons;
    
}
