import React,{useState} from 'react';
import {ProcessusList} from "../data"
import ProcessusItem from "../components/ProcessusItem"
import ProcessusDisplayItem from '../components/ProcessusDisplayItem';
import "../styles/Processus.css"

function Processus() {

  const initialProcessus={
    id:"",
    image:"",
    code:"",
    version:"",
    date:"",
    name:"",
    redacteur:   [],
    verificateur:[],
    approbateur: [],
    finaliteProcessus:"",
    piloteProcessus:"",
    amont:[],
    aval:[],
    entrees:[],
    sorties:[],
    activites:[],
    moyens:[],
    documents:[],
    efficacite:[
                {objectif:"",
                 indicateur:[]},
               ],
}


  const [processusClicked, setProcessusClicked]=useState(initialProcessus)

  console.log(processusClicked)
  
  return (
    <div className='processus'>
      <h1 className='processus__title'>Les Processus du CTH</h1>
      <div className='processus__list'>
        {ProcessusList.map((process, key) => {
            return(
              <div>
                <ProcessusItem
                  setProcessusClicked={setProcessusClicked}
                  processusClicked ={processusClicked}
                  key={key}
                  process={process}
                />
              </div>
            )
          })}
      </div>
      <div className='processusDisplay'>
        <ProcessusDisplayItem ProcessusList={processusClicked}
        />
      </div>
    </div>
  )
}

export default Processus