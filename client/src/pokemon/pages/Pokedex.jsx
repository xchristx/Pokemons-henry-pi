import { ListPokemon, OrderPokemons, IsLoading, Pagination } from '../components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector, } from 'react-redux';
import { initCharacters } from '../reducerPokemon/actionsCreator';
import './styles/Pokedex.scss';
import {  useSearchParams } from 'react-router-dom';

export const Pokedex = () => {
  
  const dispatch = useDispatch();
  const [searchParams, ] = useSearchParams();
  let {pokemons,isLoading, } = useSelector(state => state.pokemonReducer);
  const [currentPage, setCurrentPage] = useState(1);


  const indexOfLastPokemon = currentPage * 12;
	const indexOfFirstPokemon = indexOfLastPokemon - 12;
	let pokemonsPage = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  useEffect(() => {
    dispatch(initCharacters())
  }, [dispatch]);

  if (isLoading) return <IsLoading />

  return (
    <div className='container-home'>

      <div className='container-head'>
        <h2>Pokedex</h2>
        {(!searchParams.get('name'))&&<OrderPokemons setCurrentPage={setCurrentPage} />}
      </div>
      <hr />
      {  (pokemons.length > 24) && <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPokemons = {pokemons.length} />}
      <ListPokemon pokemonsPage = {pokemonsPage} />
      {  (pokemons.length > 24) && <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPokemons = {pokemons.length} />}
    
    </div>
  )
}
