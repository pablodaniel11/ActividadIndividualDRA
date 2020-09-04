import React, { Component } from 'react';
import Jugador from './jugador';

class Jugadores extends Component {

    constructor(props) {
        super(props);
        this.temporadaActual = this.props.temporadaActual;
        this.state = { jugadores: []};
    }

    async componentDidMount() {
        console.log("Cargando Jugadores");
        this.obtenerJugadores();
    }

    async obtenerJugadores() {

        try {
            const url = "http://localhost:8082/api/playersBySession?temporada=" + this.temporadaActual;
            const response = await fetch(url);
            const json = await response.json();
            console.log(JSON.stringify(json, null, 2) )
            this.setState({ jugadores: json });
        } catch (error) {
            console.error(error);
        }

    }
    mostrarJugadores = () => {
        if (this.state.jugadores.length === 0) {
            return null;
        }

        return (
            <React.Fragment>
                {
                    this.state.jugadores
                        .map((jugador,index) => (
                            <Jugador 
                            key={index} 
                            setJugadorActual={this.props.setJugadorActual}
                            datos={jugador}/>
                           
                    ))

                }
            </React.Fragment>);
    }

    render() {
        return (
            <React.Fragment>
                {this.mostrarJugadores()}
            </React.Fragment>);
    }
}

export default Jugadores;
