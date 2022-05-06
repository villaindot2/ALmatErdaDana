import * as React from 'react';



class Weather extends React.Component {
    render(){

        
        return(
           <div className='infoWeath'>
               { this.props.city && 
               <div>
                 
                 <p>Temperature:{this.props.temp}</p>
                 <p>Pressure:{this.props.pressure} </p>
                 <p>Speed of wind:{this.props.speed} </p>
                 
                 </div>
               }
               
           </div>
        );
    }
}

export default Weather;