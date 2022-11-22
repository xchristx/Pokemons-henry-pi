export const getPokemonsbyid = async(pokeid) => {

    const res = await fetch(`http://localhost:3001/pokemons/${pokeid}/`);
    const resp = await res.json()
    const {id, name, defense, attack, hp, speed, height, weight, Types, imgArt} = resp[0];

    return {id, name, defense, attack, hp, speed, height, weight, Types, imgArt}

}