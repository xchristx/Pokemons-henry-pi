import { InputCreatePokemon } from '../components/InputCreatePokemon';
import Logo from '../assets/whoIs.png'
import './styles/CreatePokemon.scss';
import { CheckBoxCreatePokemon } from '../components/CheckBoxCreatePokemon';
import { useCreatePokemon } from '../hooks/useCreatePokemon';
import { useSelector } from 'react-redux';


export const CreatePokemon = () => {

  const {allPokemons} = useSelector(state => state.pokemonReducer);
  const {handleSubmit, Types, validCheckBox, validForm} = useCreatePokemon();

  const conditions ={
    name: /^[a-zA-Z0-9_-]{4,20}$/,
    weight: /^([1-9]|[1-9]\d|[1-9]\d\d|1000)$/,
    height: /^([1-9]|[1]\d|20)$/,
    hp: /^([1-9]|[1-9]\d|[1-4]\d\d|500)$/,
    attack: /^([1-9]|[1-9]\d|[1][0-8]\d|190)$/,
    defense: /^([1-9]|[1-9]\d|[1-2][0-2]\d|230)$/,
    speed: /^([1-9]|[1-9]\d|[1]\d\d|200)$/,
  }

  return (
    <div className='create-pokemon__container'>
        <div className='create-pokemon__card-container'>
          <img src={Logo} alt="logo" /> 
          <div className='card-container__card-types'>
              {Types.map( (el,i) =>(
                  <span key={i} className={`span-types-${el}`}> {el} </span>
              ))}
          </div>
        </div>
        <div className='create-pokemon-check-boxes'>        
           <p className={
              `create-pokemons__checkbox-message${
                (validCheckBox === false)?'-enabled':''
              }`
            }>you must mark one or two types of pokemon</p>
          <CheckBoxCreatePokemon />
        </div>

        <form className='create-pokemon__form' id='create-form' >

            <InputCreatePokemon 
                label="Name" 
                name = "name"
                placeholder= "Pikachu" 
                type="text" 
                errMessage="Name must be between 4 and 20 characters, only letters, hyphen, underscore. No spaces"
                condition=  {conditions.name}
                isUnique = {allPokemons}
            />
            <InputCreatePokemon 
                label="Weight" 
                name = "weight"
                placeholder= "60" 
                type="number" 
                errMessage="Weigth must be between 1 and 1000"
                condition=  {conditions.weight}
            />
            <InputCreatePokemon 
                label="Height" 
                name = "height"
                placeholder= "4" 
                type="number" 
                errMessage="Height must be between 1 and 20"
                condition=  {conditions.height}
            />
            <InputCreatePokemon 
                label="HP" 
                name="hp"
                placeholder= "35" 
                type="number" 
                errMessage="HP must be between 1 and 500"
                condition=  {conditions.hp}
            />
            <InputCreatePokemon 
                label="Attack" 
                name="attack"
                placeholder= "55" 
                type="number" 
                errMessage="Attack must be between 1 and 190"
                condition=  {conditions.attack}
            />
            <InputCreatePokemon 
                label="Defense" 
                name="defense"
                placeholder= "40" 
                type="number" 
                errMessage="Defense must be between 1 and 230"
                condition=  {conditions.defense}
            />
            <InputCreatePokemon 
                label="Speed" 
                name="speed"
                placeholder= "50" 
                type="number" 
                errMessage="Speed must be between 1 and 200"
                condition=  {conditions.speed}
            />
       
        </form>
            <div className='create-pokemon__button'>
              {validForm === true && <p className='create-pokemon__success-create'>Success!</p>}
              {validForm === false &&<div className='create-pokemon__error-create'>
                <p><b>Opps!</b> some thing wasn't rigth </p>
              </div>}
              <button 
                className="create-pokemon__button-btn" 
                type='submit'
                onClick={handleSubmit}
                form='create-form'
                >Create</button>
            </div>
        


  </div>)
}
