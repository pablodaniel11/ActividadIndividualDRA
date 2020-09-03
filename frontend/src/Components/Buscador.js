import React, { Component } from 'react';


class Buscador extends Component {
    // state = {  }


    busquedaref = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();
        //sacamos del input y lo pasamos al principal
        this.props.datosBusqueda(this.busquedaref.current.value);
    }
    render() {
        return (
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaref} type="text" className="form-control form-control-lg" placeholder={this.props.mensaje} />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" />
                    </div>
                </div>
            </form>
        );
    }
    // }

}

export default Buscador;