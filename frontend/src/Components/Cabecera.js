import React, { useState } from 'react';
// import styles from '../Components/Cabecera.css';

function Cabecera  (props)  {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container">
                <button className="custom-toggler navbar-toggler" id="nav-btn" type="button"
                    data-toggle="collapse" data-target="#navBarsGroup" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navBarsGroup">
                    <a className="navbar-brand" href="/">Estadisticas Baloncesto</a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Temporadas<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="/">2018</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Jugador</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/">Estadisticas</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>


    )

}

export default Cabecera