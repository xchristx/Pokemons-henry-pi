
import { useSearch } from '../hooks/useSearch';
import refreshLogo from '../assets/refresh.png'
import './styles/Search.scss'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

export const Search = () => {

  const{input, message, onChangeInput, handleSubmit, found } = useSearch()
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className='search-container'>

        {searchParams.get('name')&&<img 
          src={refreshLogo} 
          alt="refresh"
          className='search-refresh-icon'
          onClick={()=>{
            dispatch({type:'GET_ALL_POKEMONS'});
            setSearchParams({});
          }
          }
        />}

      <form 
        onSubmit={handleSubmit}
        className='search-form'
      >

        <input 
          type="text"
          value={input}
          onChange = {onChangeInput}
          placeholder='Search pokemon by name'
          />
        <input type="submit" />

      {found && <h5 className= 'pokemon-not-found'>{`pokemon : ${message} not found!`}</h5>}
      </form>
    </div>
  )
}
