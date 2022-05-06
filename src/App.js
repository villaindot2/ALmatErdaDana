import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from  './components/Header';
import Home from  './Home';

import Pogoda from  './components/Pogoda';

import {Routes, Route} from 'react-router-dom';
import Footer from  './components/Footer';
import Catalog from "./components/Catalog"

const App = () => {
  return (
    
    <>

    
    <Header /> 
         
    
    <Routes>
    <Route path='/' element={<Home />}/>
      
      <Route path='/pogoda' element={<Pogoda />}/>
      <Route path='/cat' element={<Catalog />}/>
   
      
    </Routes>
    
  
    <Footer/>


    
    
    </>
  );
}

export default App;
