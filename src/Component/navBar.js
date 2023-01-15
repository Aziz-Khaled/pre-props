import React from 'react'
import {Container, Navbar} from 'react-bootstrap'

const card = () => {
  return (
    <div>
           <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Coffee exemple</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default card