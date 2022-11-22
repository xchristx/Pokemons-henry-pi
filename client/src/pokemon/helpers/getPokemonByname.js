export const getPokemonsbyname = async(name)=>{
    const res = await fetch(`http://localhost:3001/pokemons?name=${name}`)
    const data = await res.json();
    return data;
}