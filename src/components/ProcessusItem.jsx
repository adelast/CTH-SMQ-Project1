import React from 'react';

function ProcessusItem({setProcessusClicked, process, processusClicked}) {


  function handleclick()  {
    setProcessusClicked(process)
  }



  return (
    <div className={processusClicked?.id === process?.id ? "card_active" : 'card'} onClick={handleclick}>
        <div className='container__img'>
            <img src={process?.image} alt=""/>
        </div>
        <div className='details'>
            <h1>{process?.name}</h1>
            <div>
              <p>Code : {process?.code}</p>
              <p>Version : {process?.version}</p>
              <p>Date : {process?.date}</p>
            </div>
            
        </div>
    </div>
  )
}

export default ProcessusItem;