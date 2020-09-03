import React, { Component } from 'react';
import btnImagen from '../Imagenes/fondo-botones2.jpg'

class Temporada extends Component {



    clickEnlace = (e) => {
        e.preventDefault();
        this.props.setTemporadaActual(this.props.datos.temporada);
    }

    
    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 animated bounceInDown " >
                <div className="card"    >
                    < a href="/" className="streched-link" onClick={this.clickEnlace}>
                        <div className="card-body">
                            <p className="card-text text-center">{this.props.datos.temporada}</p>
                        </div>
                        <img className="card-img-top" src={btnImagen} alt="" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Temporada;