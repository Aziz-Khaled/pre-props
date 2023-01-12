import React from 'react'
import Cards from './cards'

function cardList({cardsList}) {
  return (
    <div>
      <div className ="cardList">
        {cardsList.map((el ,key) => <Cards key= {el.id} coffeeProp = {el} />)}
      </div>
       
    </div>
    
  )
}

export default cardList