import React, { Component } from 'react';
import Temporada from './Temporada';
// import styles from '../Components/Temporada.css';

class Temporadas extends Component {

    constructor() {
        super();
        this.state = { temporadas: [] };

    }


    async componentDidMount() {
        console.log('Cargando temporadas')
        this.obtenerTemporadas();
    }

    async obtenerTemporadas() {
        try {
            const url = "http://localhost:8082/api/temporadas";
            const response = await fetch(url);
            const json = await response.json();
            console.log('recuperadas ' + json._embedded.temporadas.length + ' temporadas')
            this.setState({ temporadas: json._embedded.temporadas });
        } catch (error) {
            console.error(error);
        }

    }

    mostrarTemporadas = () => {
        if (this.state.temporadas.length === 0) {
            console.log('Todavia no hay datos de temporadas')
            return null;
        }

        return (
            <React.Fragment>
                {

                    this.state.temporadas
                        .sort((a, b) => parseInt(a.temporada, 10) - parseInt(b.temporada, 10))
                        .map(tempo => (
                            <Temporada
                                datos={tempo}
                                setTemporadaActual={this.props.setTemporadaActual}
                                key={tempo.temporada} />
                        ))
                }
            </React.Fragment>
        );
    }



    render() {
        return (
            <React.Fragment>
                    {this.mostrarTemporadas()}
            </React.Fragment>);
    }
}

export default Temporadas;