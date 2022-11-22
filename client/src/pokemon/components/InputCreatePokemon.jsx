import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const InputCreatePokemon = ({name, label, placeholder, type, errMessage, condition, isUnique}) => {
  
  const dispatch = useDispatch();
  const [message, setMessage] = useState(errMessage);
  
  const inputState = useSelector(state=> state.formReducer[name])

  const handleChange = event=>{
    dispatch({type:'SET_INPUT_VALUE', payload:{name, value: event.target.value}})
  };
 
  const verif = () => {
    if(condition){
      condition.test(inputState.value)
              ?dispatch({type: 'SET_INPUT_VALID', payload:{name, isValid: true }})
              :dispatch({type: 'SET_INPUT_VALID', payload:{name, isValid: false }})
    }
    if(isUnique){
      const value = isUnique.filter( el => el.name.toLowerCase() === inputState.value.toLowerCase());
      if(value.length){
        dispatch({type: 'SET_INPUT_VALID', payload:{name, isValid: false }})
        setMessage('This pokemon name already exist.')
      }else{
        setMessage(errMessage)
      }
    }
  }
  return (
    <>
            <label className = 'create-pokemon__label' htmlFor = {label}> {label} :</label>
            <input 
              value={inputState.value}
              onChange= {handleChange}
              className={
                `create-pokemon__input${ 
                  (inputState.isValid === null)
                      ? ''
                      :inputState.isValid?'-success'
                      :'-error'
                }`
              }
              id={label}
              type={type} 
              min="1"
              placeholder={placeholder}
              onKeyUp={verif}
              onBlur= {verif} 
            />

            <p className={
              `create-pokemons__input-message${
                (inputState.isValid === false)?'-enabled':''
              }`
            }>{message}</p>
    </>
  )
}
