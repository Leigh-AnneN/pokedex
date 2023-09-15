import React from 'react';
import './Pokecard.css'

/**Defines a constant POKE_API with the base URL for 
 * fetching Pokemon images from the PokeAPI. */
const POKE_API = 'https://raw.githubusercontent.com/' +
  'PokeAPI/sprites/master/sprites/pokemon/';

  /** Individual Pokemon card. */
  function Pokecard(props){
    let imgSrc = `${POKE_API}${props.id}.png`;

    return (
        <div className = "Pokecard">
            <div className="Pokecard-title">{ props.mame }</div>
            <img className="Pokecard-image" src={imgSrc}/>
            <div className="Pokecard-data">Type: {props.type}</div>
            <div className="pokecard-data">EXP: {props.exp}</div>
        </div>
    );
  }

  export default Pokecard;