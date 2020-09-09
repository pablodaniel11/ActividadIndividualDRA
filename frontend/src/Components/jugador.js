import React, { Component } from 'react';


class Jugador extends Component {


    clickEnlace = (e) => {
        e.preventDefault();
        setTimeout(function () { //Start the timer
            this.props.limpiarBusqueda();
            this.props.setJugadorActual(this.props.datos);
        }.bind(this), 445)
    }

    render() {
        return (
            // //Asi se quedaria la imagen arriba en grande
            // <div className="col-12 col-sm-6 col-md-4 col-lg-4 mb-4 animated bounceInDown " >
            //     <div className="card seleccionMuestra"    >
            //         < a href="/" className="streched-link" onClick={this.clickEnlace}>
            //             <div className="col-auto">
            //                 <img src={(!this.props.datos.imagenjugador.startsWith("http") ? "http://" : "") + this.props.datos.imagenjugador} className="img-fluid" alt="" />
            //             </div>
            //             <div className="card-body">
            //                 <p className="letra-blanca font-weight-bold card-text text-center">{this.props.datos.nombreJugador}</p>
            //             </div>
            //             {/* <img className="card-img-top" src={btnImagen} alt="" /> */}

            //         </a>
            //     </div>
            // </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 animated bounceInDown " >
                <div className="card seleccionMuestra"    >
                    < a href="/" className="streched-link" onClick={this.clickEnlace}>
                        <div className="container">
                            <div className="row ">
                                <div className="col-md-5 text-center my-auto mt-1 mb-1 ">
                                    <img className="imagenjugadormini mt-1 mb-1" src={(!this.props.datos.imagenjugador.startsWith("http") ? "http://" : "") + this.props.datos.imagenjugador} className="img-fluid" alt="" />
                                </div>
                                <div className="col-md-7 text-center my-auto ">
                                    <p className="letra-blanca font-weight-bold card-text text-center">{this.props.datos.nombreJugador}</p>
                                </div>

                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Jugador; 