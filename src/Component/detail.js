import React from 'react'
import { Card } from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import '../App.css'

function Detail({cardsList}) {
  


  const {id} = useParams ()

  let CoffeId = Number (id)

  const CoffeeMap = cardsList.find((elem) => elem.id === CoffeId);

  console.log (CoffeeMap) ;
  return (
    <div>
{ /*       <Card>
        <Card.Img variant="top" className = "imageC" src = {CoffeeMap.image}  />
        <Card.Body>
          <Card.Text>
          {CoffeeMap.Description}
          </Card.Text>
        </Card.Body>
      </Card>
  */}

{/*  <h3 id="title">{CoffeeMap.name}</h3>
  <div className="Details_div_container">
        <div className="details-image">
        <img variant="top" className ="imageC"  alt="wiouu" src ={CoffeeMap.image}  />
        </div>


        <div className ="details-info">


            <div className="desc">
              {CoffeeMap.Description}
            </div>

        </div>

  </div>

*/}



<div className="wrapper">
  <div className="product-img">
    <img src={CoffeeMap.image} height={420} width={327} />
  </div>
  <div className="product-info">
    <div className="product-text">
      <h1>{CoffeeMap.name}</h1>
      <br/>
      <p>
        {CoffeeMap.Description}
      </p>
    </div>
    <div className="product-price-btn">
      <Link to ="/">
      <button type="button">back</button>
      </Link>
      
    </div>
  </div>
</div>





    </div>
  )
}

export default Detail