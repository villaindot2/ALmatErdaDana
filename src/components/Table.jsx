

import { Container } from 'react-bootstrap';

import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <>
        <Container fluid style={{backgroundColor: '#212529 ', color: '#fff'}}>
            <Container style={{display: 'flex', justiyContent:'center', padding:'10px'}}>
                <p>Copyright © 2022 ALABIKE.Inc.  </p>
             
            </Container>
        </Container>
        
        </>
    )
  }
}