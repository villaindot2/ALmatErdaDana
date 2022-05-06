import React, { useState } from 'react';


import { FormControl,InputGroup, Button, Modal } from 'react-bootstrap';



export default function Catalog() {
  
    const[show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

   
    return (
        <>
  



  <h2>Please enter your number and Name so we can contact you </h2>
  <InputGroup className="mb-3">
    <FormControl
      placeholder="Your number"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
   <Button variant='secondary' onClick={handleShow}>Send</Button>
  </InputGroup>

  <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>We will call you back within one minute!</Modal.Title>
                </Modal.Header>
                
            </Modal>



        </>
    )
  }













