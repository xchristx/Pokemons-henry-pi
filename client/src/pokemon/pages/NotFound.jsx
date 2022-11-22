import { NavLink } from 'react-router-dom'
import './styles/NotFound.scss'

export const NotFound = () => {
  return (
    <div className='notfound-container'>
      <h4>Not Found</h4>
      <NavLink to={'pokedex'}>
        <button className='notfound-page__button'>go to the pokedex</button>
      </NavLink>
    </div>
  )
}
