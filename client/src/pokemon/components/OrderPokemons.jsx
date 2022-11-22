import { useDispatch, useSelector } from "react-redux";

import { useOrder } from "../hooks/useOrder";
import { orderFunc } from "../reducerPokemon/actionsCreator";



import './styles/OrderPokemons.scss';

export const OrderPokemons = ({setCurrentPage}) => {

const{allPokemons} = useSelector(state=> state.pokemonReducer);


const handleClickDef45= (e)=>{
  e.preventDefault();
  const filterPokemons = allPokemons.filter( el =>el.defense <= 45)
  dispatch({type: 'SET_POKEMON_DEF45', payload: filterPokemons})
}



  const dispatch = useDispatch();
  const { key, order, setOrder, types, onChangeFilterType, onChangeOrderKey,onChangeUserCreation } = useOrder(setCurrentPage)
  return (
    <div className='container-orders'>
      <p>Order by:    </p>
        <select onChange={onChangeOrderKey}> 
            <option value="id" key='id'>Pokedex</option>
            <option value="attack" key='attack'>Attack</option>
            <option value="name" key='name'>Name</option>
        </select>
      <div className="container-orders__asc-desc-buttons">
          <button 
              onClick={()=>{         
                setOrder(true);
                dispatch(orderFunc(key, true));
                setCurrentPage(1)
              }}
              className={ `container-orders__asc-desc-buttons__btn${(order)?'-active':''}` }
          >↑
          </button>
          <button 
              onClick={()=>{
                setOrder(false);
                dispatch(orderFunc(key, false));
                setCurrentPage(1);
              }}
              className={ `container-orders__asc-desc-buttons__btn${(!order)?'-active':''}` }
          >↓
          </button>
      </div>
        <p>Filter by:</p>
        <select onChange={onChangeFilterType}> 
              {
                types.map((el,i)=>{
                  return <option value={el} key={i}>{el}</option>
                })
              }
        </select>

        <p>Show:</p>
        <select onChange={onChangeUserCreation}>
          <option value="All">All</option>
          <option value="Only_Pokedex">Only Pokedex</option>
          <option value="MyPokemons">My Pokemons</option>
        </select>
        <button
        onClick={handleClickDef45}
        >defense 45</button>
        
    </div>
  )
}
