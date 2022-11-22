import React from 'react'
import { Routes, Route, } from "react-router-dom";
import { Pokedex, NotFound,PokemonCardDetails, CreatePokemon } from '../pages/';
import { NavBar } from '../components';

export const PokemonRouter = () => {
  return (
    <>
    <NavBar />
    <Routes>
        <Route path='pokedex' element = {<Pokedex />} />
        <Route path='pokedex/:pokeid' element = {<PokemonCardDetails />} />
        <Route path='create-pokemon' element = {<CreatePokemon />} />
        <Route path='*' element={<NotFound />}/>
    </Routes>
    </>
  )
}