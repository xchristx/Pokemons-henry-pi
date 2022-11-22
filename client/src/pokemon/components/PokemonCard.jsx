import {  NavLink } from "react-router-dom";
import logo from '../assets/whoIs.png';

export const PokemonCard = ({name, types, id, imgArt = logo, attack, defense}) => {
    
  return (
    <>
        <div className='container__card-container'>

            <div className={`card-container-${types[0].name}`}>
                    <div className="card-container__card-head">
                       { 
                            (typeof(id) === 'number')
                            ? <>
                                <p className='card-head__etiqueta'>
                                    Nº:   
                                    <span className="span-card">  {id}</span>
                                </p>
                              </>
                            : <p className="card-head__etiqueta">not-official</p>
                        }

                        <p className='card-head__etiqueta'>
                            ATK   
                            <span className="span-card">  {attack}</span>
                        </p>
                                        
                    </div>
                    <NavLink to={`${id}`}>
                        <img onError={e=>{e.target.src = logo}} src={imgArt} alt={name} />
                    </NavLink>

                    <h2 className='card-container__card-name'>{name.replace(/^\w/, (c) => c.toUpperCase())}</h2>

                    <div className='card-container__card-types'>
                        {types.map( (el,i) =>(
                            <span key={i} className={`span-types-${el.name}`}> {el.name} </span>
                        ))}
                    </div>

            </div>

        </div>
    </>
  )
}
