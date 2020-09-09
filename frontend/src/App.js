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
      detallesjugadorActual: [],
      limpiar: false

    }
    this.setTemporadaActual = this.setTemporadaActual.bind(this);
    this.datosBusqueda = this.datosBusqueda.bind(this);
    this.setJugadorActual = this.setJugadorActual.bind(this);
    this.limpiarBusqueda = this.limpiarBusqueda.bind(this);
    this.limpiado = this.limpiado.bind(this);

  }


  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }


  // componentWillUpdate(){

  //   debugger;
  // }
  datosBusqueda = (busqueda) => {
    this.setState({ busquedaActual: busqueda })
  }


  SpaFaker = () => {

    if (this.isDetalleJugadorCurrent()) {
      return <JugadorDetalle detallesJugador={this.state.detallesjugadorActual} filtro={this.state.busquedaActual}  limpiarBusqueda={this.limpiarBusqueda}/>
    } else if (this.isTemporadasActualCurrent()) {
      return <Jugadores setJugadorActual={this.setJugadorActual} temporadaActual={this.state.temporadaActual} filtro={this.state.busquedaActual}  limpiarBusqueda={this.limpiarBusqueda}/>;
    }
    else {
      return (<Temporadas setTemporadaActual={this.setTemporadaActual} filtro={this.state.busquedaActual} limpiarBusqueda={this.limpiarBusqueda}/>);
    }

  }

  limpiado = () => {
    this.setState({  limpiar: false })
  }
  limpiarBusqueda = () => {
    this.setState({limpiar: true, busquedaActual: ''  })
  }
  setTemporadaActual(temporadaActual) {
    this.setState({ temporadaActual: temporadaActual });
  }
  setJugadorActual(jugadorActual) {
    this.setState({ detallesjugadorActual: jugadorActual });
  }
  seccionActual = () => {

    if (this.isDetalleJugadorCurrent()) {
      return <h1>Detalle Jugador</h1>
    } else if (this.isTemporadasActualCurrent()) {
      return <h1>Temporada {this.state.temporadaActual} </h1>
    }
    else {
      return <h1>Temporadas</h1>
    }
  }
  isTemporadasActualCurrent = () => {
    return (!!this.state.temporadaActual);
  }
  isDetalleJugadorCurrent = () => {
    return (this.state.detallesjugadorActual.length !== 0);
  }
  isTemporadasCurrent = () => {
    if (this.isTemporadasActualCurrent() === false && this.isDetalleJugadorCurrent() === false)
      return true;
    else
      return false;
  }
  clickEnlaceTemporadas = (e) => {
    e.preventDefault();
    this.setState({ temporadaActual: '', detallesjugadorActual: [] });
  }
  clickEnlaceTemporadaActual = (e) => {
    e.preventDefault();
    this.setState({ detallesjugadorActual: [] });
  }



  render() {

    let detalleJugadorBreadCrum;
    let temporadaActualBreadCrum;

    if (this.isDetalleJugadorCurrent()) {
      detalleJugadorBreadCrum = <li className="breadcrumb-item active" aria-current="page">Jugadores</li>
    }
    if (this.isTemporadasActualCurrent()) {
      temporadaActualBreadCrum = <li className={(this.isTemporadasActualCurrent() && !this.isDetalleJugadorCurrent() ? ' breadcrumb-item active' : 'breadcrumb-item ')} > <a className={(this.isTemporadasActualCurrent() && !this.isDetalleJugadorCurrent() ? ' breadcrumb-item active' : 'breadcrumb-item ')} href="/" aria-current={!this.isDetalleJugadorCurrent() ? 'page' : ''} onClick={this.clickEnlaceTemporadaActual}>Jugadores temporada {this.state.temporadaActual}</a></li>
    }

    return (
      <div className="App" >

        <Cabecera datosBusqueda={this.datosBusqueda} limpiar={this.state.limpiar} limpiado={this.limpiado} />

        <div className="container imagenFondo">
          <div className="jumbotron">
            <p className="lead text-center titulo">Estadísticas Baloncesto</p>
            <p className=" text-center">Hola, esto es Estadísticas Baloncesto, una web donde visualizar las estadísticas de los mejores jugadores de la NBA desde 2017 hasta ahora</p>
          </div>

          <div className="col-12 pt-5 sticky-top">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className={this.isTemporadasCurrent() ? 'breadcrumb-item active' : '' + "breadcrumb-item"} > <a href="/" className={(this.isTemporadasCurrent() ? ' breadcrumb-item active' : 'breadcrumb-item ')} href="/" aria-current={this.isTemporadasCurrent() ? 'page' : ''} onClick={this.clickEnlaceTemporadas}>Temporadas   {this.isTemporadasCurrent()}</a></li>
                {temporadaActualBreadCrum}
                {detalleJugadorBreadCrum}
              </ol>
            </nav>
          </div>

          <div className="col-12 p-5 row " >
            {this.SpaFaker()}

          </div>

        </div>
      </div>
    );
  }

}
export default App;