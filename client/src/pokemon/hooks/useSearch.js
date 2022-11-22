import { useState,} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

export const useSearch = () => {

    const {allPokemons} = useSelector(state=>state.pokemonReducer)
    const dispatch = useDispatch();

    const [input, setInput] = useState('');
    const [found, setFound] = useState(false);
    const [message, setMessage] = useState('');
    const [, setSearchParams] = useSearchParams();
    const onChangeInput = (e)=>{
      setInput(e.target.value)
    }  
    
    const handleSubmit = async(e)=>{
      e.preventDefault();      
      const filteredPokemon = allPokemons.filter( el=> el.name.toLowerCase() === input.toLocaleLowerCase())
      if (filteredPokemon.length) {
        dispatch({type:'FILTER_BY_NAME', payload:filteredPokemon }); 
        setInput('');
        setSearchParams({name: input})
      }
      else{
        setMessage(input);
        setInput('');
        setFound(true);
        setTimeout(()=>{
          setFound(false);
        }, 1500)
      }
    }  

    return{
        input,
        message,
        found,
        onChangeInput,
        handleSubmit
    }

}
