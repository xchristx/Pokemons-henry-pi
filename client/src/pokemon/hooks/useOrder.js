import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderFunc, pokeFilter } from "../reducerPokemon/actionsCreator";
import { getTypes } from "../helpers";

export const useOrder = (setCurrentPage)=>{
  
  const dispatch = useDispatch();
  const {filterType, show} = useSelector(state=>state.pokemonReducer)

  const [key, setKey] = useState('id');
  const [order, setOrder] = useState(true);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const getData = async()=>{
      const arr = await getTypes();
      setTypes(['All'].concat(arr));
    }
    getData();
  }, []);

  const onChangeOrderKey = event => {
    dispatch(orderFunc(event.target.value, order));
    setKey(event.target.value);
    setCurrentPage(1);
  }
  const onChangeFilterType = event =>{
    dispatch(pokeFilter(show, event.target.value));
    setCurrentPage(1);
  }
  const onChangeUserCreation = event =>{
    dispatch(pokeFilter(event.target.value, filterType));
    setCurrentPage(1);
  }

  return {
    key,
    setKey,
    order,
    setOrder,
    types,
    setTypes,
    onChangeFilterType,
    onChangeOrderKey,
    onChangeUserCreation
  }

}