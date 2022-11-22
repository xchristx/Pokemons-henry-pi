
export const getTypes = async()=>{
    const res = await fetch('https://pokeapi.co/api/v2/type/');
    const {results} = await res.json();

    const data = results.map(el=> el.name.replace(/^\w/, (c) => c.toUpperCase()));
    return data;
}
