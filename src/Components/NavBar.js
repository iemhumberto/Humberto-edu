import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

/*Import de images-beneficio para las cards gradients */
const DireInstMap = 'https://goo.gl/maps/kxjR7jVPgds';
const VerGrades = 'https://syseduca.com/asociados/login';

class NavBar extends Component {
    render() {
        return(
            <div style={{'display':'flex','flexWrap':'wrap', 'justifyContent':'center', 'margin':'auto'}}  className="navbar">
            <div className="buttons-centered-shortcuts">
                        <Link to="/mi-colegio">
                            <div className="button is-info buttons-centered-shortcuts">Mi Colegio</div>
                        </Link>
                        <a href={VerGrades}>
                            <div className="button is-primary buttons-centered-shortcuts">Ver notas</div>
                        </a>
                        <Link to="/docentes">
                            <div className="button is-danger buttons-centered-shortcuts">Docentes</div>
                        </Link>
                        <Link to="/simbolos">
                            <div className="button is-warning buttons-centered-shortcuts">Símbolos</div>
                        </Link>
                        <Link to="/talento">
                            <div className="button is-info buttons-centered-shortcuts">Talento</div>
                        </Link>
                        <a href={DireInstMap}>
                            <div className="button is-primary buttons-centered-shortcuts">Ubicación del colegio</div>
                        </a>
                        <Link to="/eventos">
                            <div className="button is-danger buttons-centered-shortcuts">Eventos</div>
                        </Link>
                    </div>
            </div>
        );
    }
 }

 export default NavBar;