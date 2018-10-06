import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const EstEnv = 'https://res.cloudinary.com/cristiansam/image/upload/v1538848740/Entorno-estudiar' +
        '-Humberto-Mu%C3%B1oz.svg';
class HomeBelow extends Component {
    render() {
        return (
            <div className="row color-doc">
                <img className="imagen-entorno-doc" src={EstEnv} alt="Entorno de estudio"/>
                <div className="entorno-doc tile is-parent">
                    <div className="tile is-child notification is-info">
                        <p className="title">Docentes de vida</p>
                        <p className="subtitle">Para una mejor educación</p>
                        <div className="content">
                            <p>Trabajamos para con la construcción de una educación en busca de personas que
                                construyan el futuro de la sociedad para bien.
                            </p>
                            <Link to="/docentes" className="button is-info is-inverted">Ver docentes</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeBelow;