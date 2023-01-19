import React, {useState} from 'react'
import "../styles/ButtonImg.css"

const ButtonImg = ({images})=> {

  const [imgState, setImgState]= useState(1);

  const toggleButton = (index) =>{
    setImgState(index)
  }

  return (
    <div className='buttonImg'>
        <div className='btns'>
            <button className={ imgState ===1 ? "btn__active btn" : "btn" } style={{"--clr":"#00FFFF"}} 
              onClick={() =>toggleButton(1)}
            >
              <span >Certificat d'Entregistrement</span>
              <i></i>
            </button>
            
            <button className={ imgState ===2 ? "btn__active btn" : "btn" } style={{"--clr":"#00FF05"}} 
              onClick={() =>toggleButton(2)}
            >
              <span>Politique Qualité</span>
              <i></i>
            </button>
            
            <button className={ imgState ===3 ? "btn__active btn" : "btn" } style={{"--clr":"#FF0095"}} 
              onClick={() =>toggleButton(3)}
            >
              <span>Cartographie Macro</span>
              <i></i>
            </button>
        </div>

        <div className={ imgState ===1 ? 'img__active':'img'}>
          <img src={images[0].image} alt=""/>
          <img src={images[3].image} alt=""/>
        </div>
        <div className={ imgState ===2 ? 'img__active':'img'}>
          <img src={images[1].image} alt=""/>
        </div>
        <div className={ imgState ===3 ? 'img__active':'img'}>
          <img src={images[2].image} alt=""/>
        </div>
    </div>
  )
}

export default ButtonImg