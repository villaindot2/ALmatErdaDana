import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import bike1 from './img/bike1.png';

import bike3 from './img/bike3.png';




const Car = ()=>{
    return (
    
      <>
      
     <Carousel>
     <Carousel.Item interval={1000} style={{'height':'600px'}}><img className='d-block w-100'
            src={bike1}
            alt="First slide"
            /></Carousel.Item>


<Carousel.Item interval={1000} style={{'height':'600px'}}><img className='d-block w-100'
            src={bike3}
            alt="First slide"
            /></Carousel.Item>

     
 </Carousel>


     </>
      
      
            

)};

export default Car;

