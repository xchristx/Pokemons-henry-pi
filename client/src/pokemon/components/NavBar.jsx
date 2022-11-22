
import { NavLink, useParams } from "react-router-dom";


import logo from '../assets/pokeinfo.png'

import './styles/NavBarStyles.scss'
import { Search } from './Search';

export const NavBar = () => {
  const params = useParams()
  
  return (
    <>

        <nav className='nav-bar'>

          <div className="nav-bar__elements-container">

            <div className='nav-bar-links'>
              <NavLink to={'/'}>
                <img className="nav-bar__logo" src={logo} alt="pokeinfo logo" />
              </NavLink>
              <div>
                  <NavLink 
                  className={
                      ({isActive})=>`link${(isActive)?'-active':''}` 
                  }
                  to = 'pokedex'
                  > Pokedex </NavLink>

                  <NavLink 
                    className={
                      ({isActive})=>`link${(isActive)?'-active':''}` 
                      }
                    to = 'create-pokemon'>
                    Create New Pokemon
                  </NavLink>
              </div>
            </div>
            <div >
              {(params['*']==='pokedex') && <Search />}
            </div>
          </div>
      </nav>
    </>
  )
}
