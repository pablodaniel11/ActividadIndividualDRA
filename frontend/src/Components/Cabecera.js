
import React, { Component, } from 'react';
import Buscador from './Buscador'
// import styles from '../Components/Cabecera.css';

class Cabecera extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavCollapsed: true,
            setIsNavCollapsed: true
        }
    }


    handleNavCollapse = () => this.setState({ isNavCollapsed: !this.state.isNavCollapsed });


    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top mayorIndex col-12" >
                <div className="container">
                    <div className="row">
                        <button className="col-2 custom-toggler navbar-toggler" id="nav-btn" type="button"
                            data-toggle="collapse" data-target="#navBarsGroup" aria-expanded={!this.state.isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={this.handleNavCollapse}>
                            <span className="navbar-toggler-icon"></span>

                        </button>
                        <a className="col-10 tituloWeb navbar-brand  mr-auto  mt-2 mt-lg-0 d-lg-none"  href="/">Estadisticas Baloncesto</a>

                    </div>


                    <div className={`${this.state.isNavCollapsed ? 'collapse ' : ''} navbar-collapse`} id="navBarsGroup">
                        <a className="tituloWeb navbar-brand  mr-auto mt-2 mt-lg-0 d-none d-lg-block" href="/">Estadisticas Baloncesto</a>
                        <Buscador datosBusqueda={this.props.datosBusqueda} limpiar={this.props.limpiar} limpiado={this.props.limpiado} />

                    </div>
                </div>
            </nav>


        )
    }


}

export default Cabecera