import React, { Component } from 'react';

class JugadorDetalle extends Component {
    constructor(props) {
        super(props);
        this.imagen = this.props.detallesJugador.imagenjugador;

        if (!this.imagen.startsWith("http")) {
            this.imagen = "http://" + this.props.detallesJugador.imagenjugador;
        }
    }

    render() {
        return (
            <div className="container animated bounceInLeft">

                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-auto">
                            <img src={this.imagen} className="img-fluid" alt="" />
                        </div>
                        <div className="col align-self-center">
                            <div className="card-block px-2 center-block  text-center ">
                                <h4 className="card-title center-block  text-center ">{this.props.detallesJugador.nombreJugador}</h4>                                
                                <p className="card-text center-block  text-center">EJEMPLO Este jugador fue el amyor anotador de tripes en 2018 por EJEMPLO</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer w-100 text-muted">
                        <div>
                            {/* < h1>{this.props.detallesJugador.equipo}</h1>
                            <h1>{this.props.detallesJugador.true_shooting_p}</h1>
                            <h1>{this.props.detallesJugador.effective_fg_p}</h1>
                            <h1>{this.props.detallesJugador.total_shooting_p}</h1>
                            <h1>{this.props.detallesJugador.orb_p}</h1>
                            <h1>{this.props.detallesJugador.drb_p}</h1>
                            <h1>{this.props.detallesJugador.trb_p}</h1>
                            <h1>{this.props.detallesJugador.ast_p}</h1>
                            <h1>{this.props.detallesJugador.tov_p}</h1>
                            <h1>{this.props.detallesJugador.stl_p}</h1>
                            <h1>{this.props.detallesJugador.blk_p}</h1>
                            <h1>{this.props.detallesJugador.usg_p}</h1>
                            <h1>{this.props.detallesJugador.ppr}</h1>
                            <h1>{this.props.detallesJugador.pps}</h1>
                            <h1>{this.props.detallesJugador.ortg}</h1>
                            <h1>{this.props.detallesJugador.drtg}</h1>
                            <h1>{this.props.detallesJugador.ediff}</h1>
                            <h1>{this.props.detallesJugador.fic}</h1> */}

                            <ul className="list-group">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <h1> equipo</h1>
                                    <span className="badge badge-primary badge-pill">{this.props.detallesJugador.equipo}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <h1> true_shooting_p</h1>
                                    <span className="badge badge-primary badge-pill">{this.props.detallesJugador.true_shooting_p}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <h1> effective_fg_p</h1>
                                    <span className="badge badge-primary badge-pill">{this.props.detallesJugador.effective_fg_p}</span>
                                </li>

                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <h1> total_shooting_p</h1>
                                    <span className="badge badge-primary badge-pill">{this.props.detallesJugador.total_shooting_p}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <h1> orb_p</h1>
                                    <span className="badge badge-primary badge-pill">{this.props.detallesJugador.orb_p}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <h1> drb_p</h1>
                                    <span className="badge badge-primary badge-pill">{this.props.detallesJugador.drb_p}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <h1> trb_p</h1>
                                    <span className="badge badge-primary badge-pill">{this.props.detallesJugador.trb_p}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <h1> ast_p</h1>
                                    <span className="badge badge-primary badge-pill">{this.props.detallesJugador.ast_p}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <h1> tov_p</h1>
                                    <span className="badge badge-primary badge-pill">{this.props.detallesJugador.tov_p}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <h1> stl_p</h1>
                                    <span className="badge badge-primary badge-pill">{this.props.detallesJugador.stl_p}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <h1> blk_p</h1>
                                    <span className="badge badge-primary badge-pill">{this.props.detallesJugador.blk_p}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <h1> usg_p</h1>
                                    <span className="badge badge-primary badge-pill">{this.props.detallesJugador.usg_p}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <h1> ppr</h1>
                                    <span className="badge badge-primary badge-pill">{this.props.detallesJugador.ppr}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <h1> pps</h1>
                                    <span className="badge badge-primary badge-pill">{this.props.detallesJugador.pps}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <h1> ortg</h1>
                                    <span className="badge badge-primary badge-pill">{this.props.detallesJugador.ortg}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <h1> drtg</h1>
                                    <span className="badge badge-primary badge-pill">{this.props.detallesJugador.drtg}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <h1> ediff</h1>
                                    <span className="badge badge-primary badge-pill">{this.props.detallesJugador.ediff}</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <h1> fic</h1>
                                    <span className="badge badge-primary badge-pill">{this.props.detallesJugador.fic}</span>
                                </li>
                                

                            </ul>

                            {/* <a href="/" className="btn btn-primary">Volver</a> */}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default JugadorDetalle;