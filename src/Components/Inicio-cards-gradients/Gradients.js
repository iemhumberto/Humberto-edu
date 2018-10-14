import React, {Component} from 'react';
import {Link} from 'react-router-dom';

/*Import de images-beneficio para las cards gradients */
const DireInstMap = 'https://goo.gl/maps/kxjR7jVPgds';
const VerGrades = 'https://syseduca.com/asociados/login';

class Gradients extends Component {
    render() {
        return (
            <section>
                <div className="row title contenido-titulo">
                    Nos indentifica...</div>
                <section
                    style={{
                    'display': 'flex',
                    'justifyContent': 'center',
                    'margin': '5%'
                }}
                    className="row">
                    <div className="cardDeporte"></div>
                    <div className="cardIntelecto"></div>
                    <div className="cardInfraestructura"></div>
                    <div className="cardTalento"></div>
                </section>
                <section className="column">
                    <article className="message is-info message-space">
                        <div className="message-body">
                            <strong>
                                Navegación rápida dentro de la plataforma. Haga Click en el botón de su interés.
                            </strong>
                        </div>
                    </article>
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
                </section>
            </section>
        );
    }
}

export default Gradients;