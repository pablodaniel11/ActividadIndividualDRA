import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import strings from './res/detallesJugadorStrings'


class JugadorDetalle extends Component {
    constructor(props) {
        super(props);
        this.imagen = this.props.detallesJugador.imagenjugador;

        if (!this.imagen.startsWith("http")) {
            this.imagen = "http://" + this.props.detallesJugador.imagenjugador;
        }
    }

    render() {
        let htmlEstadisticasJugador = '';
        // console.log(Object.entries(this.props.detallesJugador));
        var excluidas = ["IMAGENJUGADOR", "ASSETS", "IDJUGADOR","NOMBREJUGADOR","TEMPORADA"];

        for (const [key, value] of Object.entries(this.props.detallesJugador)) {
            // console.log(Object.keys(strings).find(d=>d===key));
            // console.log(strings[Object.keys(strings).find(d=>d===key)]);
            if (!excluidas.includes(key.toUpperCase())) {
                htmlEstadisticasJugador += `<div class="card col-12 col-sm-4 col-md-3 col-lg-3" >`
                htmlEstadisticasJugador += `<div class="card-header">`
                htmlEstadisticasJugador += strings[Object.keys(strings).find(d=>d===key)]
                htmlEstadisticasJugador += `</div>`
                htmlEstadisticasJugador += `<ul class="list-group list-group-flush">`
                htmlEstadisticasJugador += `<li class="text-muted list-group-item">` + value + `</li>`
                htmlEstadisticasJugador += `</ul>`
                htmlEstadisticasJugador += `</div>`
            }

        }

        return (
            <div className="container animated bounceInLeft" >

                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-auto">
                            <img src={this.imagen} className="img-fluid" alt="" />
                        </div>
                        <div className="col align-self-center">
                            <div className="card-block px-2 center-block  text-center ">
                                <h4 className="card-title center-block  text-left ">{this.props.detallesJugador.nombreJugador}</h4>
                                <p className="card-text center-block  text-left" > Para ver mas tipo de estadisticas, pinche <a href = "https://basketball.realgm.com/info/glossary"> aqui </a> </p>
                            </div>
                        </div>
                    </div>

                    <div className="card-footer w-100  col-12 row no-gutters">

                        {ReactHtmlParser(htmlEstadisticasJugador)}
                       
                    </div>
                </div>
            </div>
        );
    }
}

export default JugadorDetalle;