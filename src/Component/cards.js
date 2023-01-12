import React from 'react'
import { Button, Card } from 'react-bootstrap'
function movieCard({coffeeProp}) {
  return (
    <div >
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={coffeeProp.image} />
      <Card.Body>
        <Card.Title>{coffeeProp.name}</Card.Title>
        <Card.Text>
         {coffeeProp.Description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default movieCard