import React from 'react'
import { Routes, Route, } from "react-router-dom";
import { LandingPage } from '../pokemon/pages/LandingPage';
import { PokemonRouter } from '../pokemon/Router/PokemonRouter';

export const RouterApp = () => {
  return (
    <>
    <Routes>
        <Route path='/' element = {<LandingPage />} />
        <Route path='*' element={<PokemonRouter />}/>
    </Routes>
    </>
  )
}
