import React from 'react';
import './Featured.css'
import House1 from '../../assets/house1.jpeg'
import Bed1 from '../../assets/bed1.jpeg'
import Bed2 from '../../assets/kitchen.jpeg'
import Kitchen from '../../assets/house1.jpeg'
import Bathroom from '../../assets/bath1.jpeg'

import House2 from '../../assets/house2.jpeg'
import Bed3 from '../../assets/bed3.jpeg'
import Bed4 from '../../assets/bed4.jpeg'
import Bathroom2 from '../../assets/bath2.jpeg'
import LivingRoom from '../../assets/living-room.jpeg'

function Featured() {
  return (
    <div className="featured">
      <h1 className='featured-text'>Les meilleures annonces</h1>
      <p className='featured-text'>Des offres sélectionnées par ville, état, code postal en fonction des vues.</p>
      <div className="container">
        <img className='span-3 image-grid-row-2' src={ House1 } alt="" />
        <img src={ Bed1 } alt="" />
        <img src={ Bed2 } alt="" />
        <img src={ Kitchen } alt="" />
        <img src={ Bathroom } alt="" />
        <div className="span-3 img-details">
          <div className="top">
            <h2> 458 cours de la libération, 33400, Talence</h2>
            <p>Maison à vendre</p>
            <p className='price'>320.000.000€</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Chambres:</p><p>5</p>
              </div>
              <div className="info">
                <p className="bold">Douches:</p><p>7</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Mètres carrés:</p><p>8,138</p>
              </div>
              <div className="info">
                <p className="bold">À payer:</p><p>14,797€/mois</p>
              </div>
            </div>
          </div>
        </div>
        <div className="span-2 right-img-details">
          <p>Une belle maison moderne en ville avec une piscine grandeur nature. Maison spacieuse et luxueuse située au Texas. Comprenant une salle multimédia, une salle d'entraînement et un sauna intégré.</p>
          <button className="btn">Voir la liste</button>
        </div>
      </div>
      {/* section */}
      <div className="container">
        <img className='span-3 image-grid-row-2 order-1' src={House2} alt="" />
        <img className='order-2' src={Bed3} alt="" />
        <img className='order-3' src={Bed4} alt="" />
        <img className='order-4' src={Bathroom2} alt="" />
        <img className='order-5' src={LivingRoom} alt="" />
        <div className="span-2 right-img-details order-7">
          <p>Une belle maison moderne en ville avec une piscine grandeur nature. Maison spacieuse et luxueuse située au Texas. Comprenant une salle multimédia, une salle d'entraînement et un sauna intégré.</p>
          <button className="btn">Voir la liste</button>
        </div>
        <div className="span-3 img-details order-6">
          <div className="top">
            <h2> 458 cours de la libération, 33400, Talence</h2>
            <p>Maison à vendre</p>
            <p className='price'>320.000.000€</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Chambres:</p><p>5</p>
              </div>
              <div className="info">
                <p className="bold">Douches:</p><p>7</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Mètres carrés:</p><p>8,138</p>
              </div>
              <div className="info">
                <p className="bold">À payer:</p><p>14,797€/mois</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Featured;
