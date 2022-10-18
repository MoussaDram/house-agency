import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai'

import './Hero.css'
function Hero() {
  return (
    <div className='hero'>
      <div className="content">
        <h1>Trouver l'endroit parfait</h1>
        <p className='search-text'>Cherche une large selction de maisons et d'appartements luxieux
          tout seul ou en famille
        </p>
        <form className='search'>
          <div>
            <input type="text" placeholder='Entrez-votre mot clé'/>
          </div>
          <div className="radio">
            <input type="radio" checked />
            <label>Acheter</label>
            <input type="radio" />
            <label>Louer</label>
            <button type='submit'><AiOutlineSearch className='icon'/> Envoyer</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;
