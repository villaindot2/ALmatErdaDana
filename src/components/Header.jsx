import React, { useState } from 'react';

import { Nav, Navbar, Container, Button, Modal} from 'react-bootstrap';





    

export default function Header(){
    const[show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   

    return (
        <>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">ALABIKE</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link href='/'>Home</Nav.Link>
    <Nav.Link href='/pogoda'>Weather</Nav.Link>

    </Nav>
    <Nav>
        <Button variant='secondary' onClick={handleShow}>Contacts</Button>
      </Nav>
    <Nav>
      <Nav.Link href='/cat'>Contact</Nav.Link>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

<Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Our contacts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>almatybike@gmail.com</p>
                    <p>+98573820</p>
                    <a href='/'>alabike.gram</a>
                </Modal.Body>
            </Modal>

            </>
    );
    }


