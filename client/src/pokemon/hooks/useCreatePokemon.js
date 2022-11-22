import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initCharacters } from '../reducerPokemon/actionsCreator'
import { useNavigate } from 'react-router-dom';
import { verifNull } from '../reducerForm/formReducer';


export const useCreatePokemon = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
        
    const { name, weight, height, hp, attack, defense, speed, Types, validCheckBox, validForm} = useSelector(state=>state.formReducer)

    useEffect(() => {
        dispatch(initCharacters())
        dispatch({type:'RESET_FORM'})
    }, [dispatch]);


    const handleSubmit = async e=>{
        e.preventDefault();
        if(Types.length > 0 && Types.length < 3) dispatch({type:'SET_VALID_CHECKBOX', payload:true});
        else dispatch({type:'SET_VALID_CHECKBOX', payload:false});
        if (name.isValid &&
            weight.isValid &&
            height.isValid &&
            attack.isValid &&
            defense.isValid &&
            speed.isValid &&
            validCheckBox){

            dispatch({type: 'VALID_FORM', payload:true})
            const form = {
                name: name.value,
                weight: weight.value,
                hp:hp.value,
                height: height.value,
                attack: attack.value,
                defense: defense.value,
                speed: speed.value,
                Types
            }
            
            try {
                let config = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
                }
                console.log(config)
                let res = await fetch('http://localhost:3001/pokemons/', config);
                let resp = await res.json();
                console.log(resp)
            } catch (e) {
                console.error(e)
            }
            setTimeout(() => {
                dispatch({type:'RESET_FORM'})
                navigate('/pokedex')
            }, 1000);

        }else{
            dispatch(verifNull())
            dispatch({type: 'VALID_FORM', payload:false})
        }


    }
  return {handleSubmit, Types, validCheckBox, validForm}
}