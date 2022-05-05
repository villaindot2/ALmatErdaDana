import * as React from 'react';



class Form extends React.Component {
    render(){
        return(
           <form onSubmit={this.props.weatherMethod}>
             
               <button>Click</button>
               <h3>Now in Almaty...</h3>

           </form>
        );
    }
}

export default Form;