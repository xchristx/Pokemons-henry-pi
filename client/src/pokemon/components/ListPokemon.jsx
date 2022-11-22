
import { PokemonCard } from './PokemonCard';
import './styles/ListPokemon.scss';


export const ListPokemon = ({pokemonsPage}) => {
  
  return (
    <>
    <div className='container'>
      <div className="container-cards">
        {
          pokemonsPage.map( el =>(
            <PokemonCard key={el.id} attack={el.attack} name = {el.name} types = {el.Types} id = {el.id} imgArt = {el.imgArt} defense={el.defense} />
          ))
        }
      </div>
    </div>
    </>
  )
}
