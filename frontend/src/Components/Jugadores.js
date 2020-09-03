import React, { Component } from 'react';
import Jugador from './jugador';

class Jugadores extends Component {

    constructor() {
        super();
        this.state = { jugadores: [] };
    }

    async componentDidMount() {
        console.log("Cargando Jugadores");
        this.obtenerJugadores();
    }

    async obtenerJugadores() {

        try {
            const url = "http://localhost:8082/api/jugadors";
            const response = await fetch(url);
            const json = await response.json();
            console.log('recuperados ' + json._embedded.jugadors.length + ' jugadores')
            this.setState({ jugadores: json._embedded.jugadors });
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
