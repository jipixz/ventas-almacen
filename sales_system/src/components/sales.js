import React, { Component } from 'react';
import Tabla from './tabla';


class salesComponent extends Component {

  constructor(){
    super();
    this.state=({
        db: []
    });
    this.muestraSales();
  }

  muestraSales(){
      fetch("http://localhost:80/practica-php/api/")
      .then((response)=>response.json())
      .then((responseJson)=>
      {console.log(responseJson);
          this.setState({
              db: responseJson
          });
      })
  }
  //en el metodo render se pone el titulo del formulario
  render(){
    return(
      <div className="container">
        <div>
            <Tabla arrayProductos={this.state.db}></Tabla>
        </div>
      </div>
    );
  }
}

export default salesComponent;