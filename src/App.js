import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from  './components/Header';
import Home from  './Home';
import Catalog from  './components/Catalog';
import Pogoda from  './components/Pogoda';

import {Routes, Route} from 'react-router-dom';
import Footer from  './components/Footer';
import Content from "./components/content.jsx"

const App = () => {
  return (
    
    <>

    
    <Header /> 
         
    
    <Routes>
    <Route path='/' element={<Home />}/>
      
      <Route path='/pogoda' element={<Pogoda />}/>
      <Route path='/cat' element={<Catalog />}/>
   
      
    </Routes>
    <Content/>
  
    <Footer/>


    
    
    </>
  );
}

export default App;
