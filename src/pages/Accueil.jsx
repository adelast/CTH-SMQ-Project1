import React from 'react';
import "../styles/Accueil.css";
import Carousel from "../components/Carousel";
import {ImgCarousel} from '../data';
import  {Img__btn} from "../data"
import ButtonImg from "../components/ButtonImg"


const Accueil = () => {
  return (
    <div className='accueil'>
      <div className="accueilCarousel">
        <div className='topContent' >
          <h2>CTH-SMQ</h2> 
          <p>L'information du Système Qualité du CTH en Ligne</p> 
        </div>
        <Carousel images={ImgCarousel}/>
        <ButtonImg  images={Img__btn}/>
      </div>
    </div>
  )
}

export default Accueil