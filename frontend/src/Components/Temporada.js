import React, { Component } from 'react';
import btnImagen from '../Imagenes/fondo-botones2.jpg'

class Temporada extends Component {

constructor(){
    super()
    this.state = {
        bounceOut:''
    }
}

    clickEnlace = (e) => {
        e.preventDefault();
        this.setState({ bounceOut: true })
        setTimeout(function () { //Start the timer
            this.props.limpiarBusqueda();

            this.props.setTemporadaActual(this.props.datos.temporada);
        }.bind(this), 445)

    }


    render() {      
       
        return (
            // <div className={"col-12 col-sm-6 col-md-4 col-lg-4 mb-4 animated " +(this.state.bounceOut ? 'bounceOutLeft' : 'bounceInLeft')}>

            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 animated bounceInLeft ">
                <div className="card seleccionMuestra" >
                    < a href="/" className="streched-link" onClick={this.clickEnlace}>
                        <div className="card-body temporadaPad">
                            <p className="letra-blanca font-weight-bold card-text text-center">{this.props.datos.temporada}</p>
                        </div>
                        <img className="card-img-top" src={btnImagen} alt="" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Temporada;