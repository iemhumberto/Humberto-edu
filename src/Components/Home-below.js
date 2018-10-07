import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Mapa from './Map';
const EstEnv = 'https://res.cloudinary.com/cristiansam/image/upload/v1538848740/Entorno-estudiar' +
        '-Humberto-Mu%C3%B1oz.svg';
const InfraEst = 'https://res.cloudinary.com/cristiansam/image/upload/v1538861147/Infraestructura-' +
        'humberto-mu%C3%B1oz-ordo%C3%B1ez-mock-up.svg';

const DeparTalentos = 'https://res.cloudinary.com/cristiansam/image/upload/v1538862990/Talentos-deporti' +
        'stas-Humberto-Mu%C3%B1oz.svg';

class HomeBelow extends Component {
    render() {
        return (
            <section>
                <div className="row color-doc">
                    <img className="imagen-entorno-doc" src={EstEnv} alt="Entorno de estudio"/>
                    <div className="entorno-doc tile is-parent">
                        <div className="tile is-child notification is-info">
                            <p className="title">Docentes de vida</p>
                            <p className="subtitle">Para una mejor educación</p>
                            <div className="content">
                                <p>Trabajamos para con la construcción de una educación en busca de
                                    <strong>personas</strong>
                                    que construyan el futuro de la
                                    <strong>sociedad para bien.</strong>
                                </p>
                                <Link to="/docentes" className="button is-info is-inverted">Ver docentes</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="row">
                        <div className="infraestructura-inst tile is-parent">
                            <div className="tile is-child notification is-info">
                                <p className="title">Infraestructura de la Institución</p>
                                <p className="subtitle">Mejor planta física a nivel del departamento</p>
                                <div className="content">
                                    <p>Nuestra Institución cuenta con una de las plantas físicas más modernas y
                                        dotadas de herramientas y sectores dedicados para una educación de calidad.
                                    </p>
                                    <Link to="/mi-colegio" className="button is-info is-inverted">Ver Institución</Link>
                                </div>
                            </div>
                        </div>
                        <img
                            className="imagen-infraestructura-inst"
                            src={InfraEst}
                            alt="Infraestructura de la Institución"/>
                    </div>
                </section>
                <section>
                    <div className="row color-doc">
                        <img
                            className="imagen-deportistas-humberto"
                            src={DeparTalentos}
                            alt="Infraestructura de la Institución"/>
                        <div className="deportistas-humberto tile is-parent">
                            <div className="tile is-child notification is-info">
                                <p className="title">Talentos. Deportistas con pasión</p>
                                <p className="subtitle">Mejor planta física a nivel del departamento</p>
                                <div className="content">
                                    <p>Nuestros estudiantes se preparan para eliminatorias locales, departamentales
                                        e incluso Nacionales. Demuestran talento, práctica y esfuerzo.
                                    </p>
                                    <Link to="/talento" className="button is-info is-inverted">Ver deportistas insignia</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Mapa/>
                </section>
            </section>
        );
    }
}

export default HomeBelow;