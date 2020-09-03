import React, { Component } from 'react';


class Jugador extends Component {
  
  
    clickEnlace = (e) => {
        e.preventDefault();
        this.props.setJugadorActual(this.props.datos);
    }    
    
    render() {
        return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 animated bounceInDown " >
                <div className="card"    >
                    < a href="/" className="streched-link" onClick={this.clickEnlace}>
                        <div className="card-body">
                            <p className="card-text text-center">{this.props.datos.nombreJugador}</p>
                        </div>
                        {/* <img className="card-img-top" src={btnImagen} alt="" /> */}
                        
                    </a>
                </div>
            </div>
        );
    }
}

export default Jugador; 