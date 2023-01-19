import React from 'react';
import "../styles/ProcessusDisplayItem.css";
import Listing1 from './Listing1';
import Listing2 from './Listing2';


function ProcessusDisplayItem({ProcessusList}) {
  return (
    <div className='processusDisplayItem'>
        <div className='processusDisplayTitle'>
          <h1 className='fp'>Fiche Processus</h1>
          <h1 className='fpt'>{ProcessusList?.name}</h1>
        </div>
        <table className='table1'>
          <thead>
            <tr>
              <th></th>
              <th>Nom et Prénom</th>
              <th>Fonction</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                {ProcessusList?.redacteur?.map((process, key) => {
                  return(
                    <Listing1 
                      key={key}  
                      process={process}  
                    />
                  )
                })}
            </tr>
            <tr>
                {ProcessusList?.verificateur?.map((process, key) => {
                  return(
                    <Listing1 
                      key={key}  
                      process={process}  
                    />
                  )
                })}
            </tr>
            <tr>
                {ProcessusList?.approbateur?.map((process, key) => {
                  return(
                    <Listing1 
                      key={key}  
                      process={process}  
                    />
                  )
                })}
            </tr>
          </tbody>
        </table>
        <div className='processusFinalite'>
          <p>FINALITE DU PROCESSUS: <span>{ProcessusList?.finaliteProcessus}</span></p>
          <p>PILOTE DU PROCESSUS: <span>{ProcessusList?.piloteProcessus}</span></p>
        </div>
        <div className='interface'>
            <h1>INTERFACE :</h1>
          <div className='box1'>
            <div className='amontAval'>
              <div className='amont'>
                <h1>AMONT:</h1>
                <ul>
                  {ProcessusList?.amont?.map((process, key) => {
                    return(
                      <Listing2 
                        key={key}  
                        process={process}  
                      />
                    )
                  })}
                </ul>
              </div>
              <div className='aval'>
                <h1>AVAL:</h1>
                <ul>
                  {ProcessusList?.aval?.map((process, key) => {
                    return(
                      <Listing2 
                      key={key}  
                      process={process}  
                      />
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className='amontAval'>
              <div className='amont'>
                <h1>ENTREE:</h1>
                <ul>
                  {ProcessusList?.entrees?.map((process, key) => {
                    return(
                      <Listing2 
                        key={key}  
                        process={process}  
                      />
                    )
                  })}
                </ul>
              </div>
              <div className='aval'>
                <h1>SORTIE:</h1>
                <ul>
                  {ProcessusList?.sorties?.map((process, key) => {
                    return(
                      <Listing2 
                      key={key}  
                      process={process}  
                      />
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className='interface'>
            <h1>ENCHAINEMENT DES ACTIVITES :</h1>
            <div className='activites'>
            <ul>
                  {ProcessusList?.activites?.map((process, key) => {
                    return(
                      <Listing2 
                        key={key}  
                        process={process}  
                      />
                    )
                  })}
                </ul>
            </div>
        </div>


        <div className='interface'>
            <h1>MOYENS ALLOUES :</h1>
            <div className='activites'>
            <ul>
                  {ProcessusList?.moyens?.map((process, key) => {
                    return(
                      <Listing2 
                        key={key}  
                        process={process}  
                      />
                    )
                  })}
                </ul>
            </div>
        </div>


        <div className='interface'>
            <h1>DOCUMENTS ASSOCIES :</h1>
            <div className='activites'>
            <ul>
                  {ProcessusList?.documents?.map((process, key) => {
                    return(
                      <Listing2 
                        key={key}  
                        process={process}  
                      />
                    )
                  })}
                </ul>
            </div>
        </div>

          <h1>MESURE D'EFFICACITE DU PROCESSUS: </h1>
          <table className='table1'>
            <thead>
              <tr>
                <th>OBJECTIFS: </th>
                <th>INDICATEURS:</th>
              </tr>
            </thead>
            <tbody>
                {ProcessusList?.efficacite?.map((process1, idx) => {
                    return(
                      <tr key={idx}>
                          <td>{process1?.objectif}</td>
                          <td className='indicateurtd'>
                            {process1?.indicateur?.map((process,key)=>{
                              return(
                                <Listing2 
                                  key={key}  
                                  process={process}  
                                /> 
                              )            
                            })}
                          </td>
                      </tr>
                    )
                })}
            </tbody>
          </table>



        </div>

  )
}

export default ProcessusDisplayItem