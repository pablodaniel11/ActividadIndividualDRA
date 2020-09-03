import React from 'react';
// import Buscador from './Components/Buscador';
import Temporadas from './Components/Temporadas';
import './App.css';
import Cabecera from './Components/Cabecera';
import WOW from 'wowjs';
import Jugadores from './Components/Jugadores';
import JugadorDetalle from './Components/JugadorDetalle';



class App extends React.Component {

  constructor() {
    super();

    this.state = {
      busquedaActual: '',
      temporadaActual: '',
      //jugadorActual: '',
      detallesjugadorActual: []
    }
    this.setTemporadaActual = this.setTemporadaActual.bind(this);
    this.datosBusqueda = this.datosBusqueda.bind(this);
    this.setJugadorActual = this.setJugadorActual.bind(this);

  }


  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }

  datosBusqueda = (busqueda) => {
    this.setState({ busquedaActual: busqueda })
  }


  SpaFaker = () => {
    if (this.state.detallesjugadorActual.length !== 0) {
      return <JugadorDetalle detallesJugador={this.state.detallesjugadorActual} />
    } else if (!!this.state.temporadaActual) {
      return <Jugadores setJugadorActual={this.setJugadorActual} />;
    }
    else {
      return (<Temporadas setTemporadaActual={this.setTemporadaActual} />);
    }
  }

  setTemporadaActual(temporadaActual) {
    this.setState({ temporadaActual: temporadaActual });
  }

  setJugadorActual(jugadorActual) {
    this.setState({ detallesjugadorActual: jugadorActual });
  }

  seccionActual = () => {
    if (this.state.detallesjugadorActual.length !== 0) {
      return <h1>Detalle Jugador</h1>
    } else if (!!this.state.temporadaActual) {
      return <h1>Jugadores</h1>
    }
    else {
      return <h1>Temporadas</h1>
    }
  }

  render() {
    return (
      <div className="App" >

        <Cabecera />

        <div className="container imagenFondo">

          {/* <div className="jumbotron">
          <p className="lead text-center titulo">Estadisticas Baloncesto!</p>
          <p className=" text-center">Hola, esto es Estadisticas Baloncesto, una web donde visualizar las estadisticas de los mejores jugadores de la NBA desde 2017 hasta ahora</p>
          <Buscador
            mensaje="Busca las temporadas. Ejemplo 2018"
            datosBusqueda={this.datosBusqueda}
          />
        </div> */}

          <div className="text-center mt-5">
            {this.seccionActual()}
          </div>
          <div className="cold-12 p-5 row " >
            {this.SpaFaker()}
          </div>
        </div>
      </div>
    );
  }

}
export default App;