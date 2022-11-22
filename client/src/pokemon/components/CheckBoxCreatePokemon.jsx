import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from '../helpers';

export const CheckBoxCreatePokemon = () => {
  
  const dispatch = useDispatch();
  const {Types} = useSelector(state=> state.formReducer)
  const [types, setTypes] = useState([]);
  const [isChecked, setIsChecked] = useState([]);
  
  useEffect(() => {
    const getAllTypes = async ()=>{
      const arr = await getTypes();      
      setTypes(arr);
      setIsChecked(new Array(arr.length).fill(false));
    }
    getAllTypes();
  }, [])

    const handleChangeCheckbox = event =>{
        const elementChecked = event.target.value;
        const checked = event.target.checked;
        const id = parseInt(event.target.id);
    
        if(checked){
            let updateIsChecked = isChecked.map( (el,i)=> {
      
              if (i === id) return true;
              return el;
            });
            setIsChecked(updateIsChecked)
            dispatch({type: 'SET_TYPE', payload:elementChecked});
            dispatch({type: 'SET_VALID_CHECKBOX', payload: true});
            
        }else{
          dispatch( {type: 'REPLACE_TYPE', payload: Types.filter(el => el !== elementChecked) })

          let updateIsCheckedFalse = isChecked.map( (el,i)=> {
            if (i === id) return false;
            return el;
          } )
          setIsChecked(updateIsCheckedFalse);

          if(Types.length === 1 ) dispatch({type: 'SET_VALID_CHECKBOX', payload: false});
          
        }
  }


  return (
    < >
        <p className='check-box-title'>Type: </p>
          {types.map( (el,i)=>(
          <div key={i} ><input type="checkbox" onChange={handleChangeCheckbox} name="type" value={el} id={i} disabled={Types.length > 1 && !isChecked[i]} /> <label htmlFor={i}> {el}</label></div> 
          ))}
       
    </>
  )
}
