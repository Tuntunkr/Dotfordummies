import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
import './Header.css';


function Header() {
  return (
    <div>
        <Navbar  className='navbar'  expand="lg">
  <Container fluid>
    <Navbar.Brand  href="/">
        <img className='logo' src='./dot.png' alt="/logo"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-4 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link className='menu_Link' href="/">Home</Nav.Link>
        <Nav.Link className='menu_Link' href="/articles">Articles</Nav.Link>
        <Nav.Link className='menu_Link' href="/donate">Donate</Nav.Link>
        
        
      </Nav>
     
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default Header