import React, { Component } from 'react';


class Buscador extends Component {
    // state = {  }
    componentWillUpdate() {
        if (this.props.limpiar) {
            this.busquedaref.current.value = '';
            this.props.limpiado();
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot){

        // console.log("componentDidUpdate de Buscador");
        // console.log(prevProps);
        // console.log(prevState);

        // console.log(snapshot);

    }
    busquedaref = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();
        //sacamos del input y lo pasamos al principal
        this.props.datosBusqueda(this.busquedaref.current.value);

        // 5
    }

    //limpiar={this.props.limpiar} limpiado={this.props.limpiado}
    render() {
        return (
            <form onSubmit={this.obtenerDatos} className="form-inline my-2 my-lg-0">
                <input ref={this.busquedaref} type="text" className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
                {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button> */}
            </form>
        );
    }

}

export default Buscador;