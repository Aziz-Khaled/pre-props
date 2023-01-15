import React from 'react'
import { Button, Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function MovieCard({coffeeProp}) {

  return (
    <div >
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={coffeeProp.image} />
      <Card.Body>
        <Card.Title>{coffeeProp.name}</Card.Title>
        <Card.Text>
          
         {coffeeProp.Description}
        </Card.Text>
          <Link to ={`/Details/${coffeeProp.id}`}>
          <Button variant="primary">more details</Button>
          </Link>

      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard