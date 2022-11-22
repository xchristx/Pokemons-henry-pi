import {NavLink} from 'react-router-dom'
import logo from '../assets/landingPage.png'
import './styles/LandingPage.scss'

export const LandingPage = () => {
  return (
    <div className='landing-page__container'>
      <img src={logo} alt="landingPage" className='landing-page__img' />
      <NavLink to={'pokedex'}>
        <button className='landing-page__button'>go to the pokedex</button>
      </NavLink>
    </div>
  )
}
