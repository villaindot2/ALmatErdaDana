import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from  './Form';
import Info from  './Info';
import Weather from  './Weather';
import './Pogoda.css';




class Pogoda extends React.Component {

    state ={
      temp : undefined,
      city : undefined,
      country : undefined,
      pressure : undefined,
      wind : undefined 
    }

gettingWeather = async(e) =>{
    e.preventDefault();
    
const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Almaty&APPID=3914a1e24558b8caf57061a455df858d`);
const data = await api_url.json();
console.log(data);

  

this.setState({
    
   temp: data.main.temp,
   city: data.name,
   country :data.sys.country,
   pressure : data.main.pressure,
   speed : data.wind.speed
   
   
});
    }
    render(){

        
    return (
        
        <>
       
       <div className='wrapper'>
           <div className='main'>
           <div className="container">
               <div className="row">
                   <div className='col-sm-5 info'>
                   <Info />
                   </div>
                   <div className='col-sm-7 form     '>
                   <Form weatherMethod={this.gettingWeather}/>
            <Weather 
            temp={this.state.temp}
            city={this.state.city}
            country={this.state.country}
            pressure={this.state.pressure}
            speed ={this.state.speed} 
            />
                   </div>
               </div>
           </div>
           </div>
           

           
            
            
       </div>
    
</>

)}};

export default Pogoda;        