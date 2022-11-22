import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { pokemonReducer } from './pokemon/reducerPokemon/pokemonReducer';
import { formReducer } from './pokemon/reducerForm/formReducer';


export const pokemonStore = createStore(
    combineReducers({pokemonReducer, formReducer}), 
    composeWithDevTools(applyMiddleware(thunk))
);
