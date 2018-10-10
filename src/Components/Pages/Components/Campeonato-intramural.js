import React, {Component} from 'react';
import Footer from '../../Footer';

/*Imports de media */

class CampeonatoIntramural extends Component {
    render() {
        return (
            <section>
                <div className="titulo-evento-en-particular-football">
                    <p>Campeonato Intramural | Evento</p>
                </div>
                <section className="row">
                    <div className="eventos-tarjetas-football"></div>
                </section>
                {/*Costos*/}
                <section className="row info-tags-eventos">
                    <div className="tags has-addons">
                        <span
                            style={{
                            'fontSize': '1.3em'
                        }}
                            className="tag">Costo</span>
                        <span
                            style={{
                            'fontSize': '1.3em',
                            'fontWeight': 'bold'
                        }}
                            className="tag is-warning">$1.0xx0 por equipo participante</span>
                    </div>
                </section>
                {/*Fecha*/}
                <section className="row info-tags-eventos">
                    <div className="tags has-addons">
                        <span
                            style={{
                            'fontSize': '1.3em'
                        }}
                            className="tag">Fecha</span>
                        <span
                            style={{
                            'fontSize': '1.3em',
                            'fontWeight': 'bold'
                        }}
                            className="tag is-warning">17 Octubre - 7:50 AM</span>
                    </div>
                </section>
                <section>
                    {/*Introducción del evento */}
                    <div className="card tarjerta-contenido-eventos">
                        <div className="card-header">
                            <h2
                                style={{
                                'margin': 'auto',
                                'padding': '10px',
                                'color': 'gray'
                            }}
                                className="title">Campeonato Intramural - Juvenil</h2>
                        </div>
                        <div className="card-content">
                            <div className="content contenido-tarjeta-eventos">
                                <p
                                    style={{
                                    'color': 'gray'
                                }}>
                                    <strong>Sede principal</strong>
                                </p>
                            </div>
                            <p>Invitación especial a la inaugración del campeonato Intramural Juvenil</p>
                        </div>
                    </div>
                    {/*Beneficios*/}
                    <div className="card tarjerta-contenido-eventos">
                        <div className="card-header">
                            <h2
                                style={{
                                'margin': 'auto',
                                'padding': '10px',
                                'color': 'gray'
                            }}
                                className="title">Beneficios</h2>
                        </div>
                        <div className="card-content">
                            <div className="content contenido-tarjeta-eventos">
                                <ol>
                                    <li>
                                        Primer y segundo puesto goleador.
                                    </li>
                                    <ul>
                                        <li>
                                            Premiación Trofeo.
                                        </li>
                                    </ul>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {/*Recomendaciones*/}
                    <div
                        style={{
                        'marginBottom': '3%'
                    }}
                        className="card tarjerta-contenido-eventos">
                        <div className="card-header">
                            <h2
                                style={{
                                'margin': 'auto',
                                'padding': '10px',
                                'color': 'gray'
                            }}
                                className="title">Recomendaciones y requerimientos</h2>
                        </div>
                        <div className="card-content">
                            <div className="content contenido-tarjeta-eventos">
                                <p>
                                    <ol>
                                        <li>
                                            Todos los participantes tendrán que cumplir el reglamento en el espacio grupal e
                                            individual.
                                        </li>
                                        <li>
                                            Se le recuerda a los particupantes que deben usar obligatoriamente:
                                        </li>
                                        <ul>
                                            <li>
                                                Canilleras.
                                            </li>
                                            <li>
                                                Media larga.
                                            </li>
                                            <li>
                                                Entre otro equipo reglamentario.
                                            </li>
                                        </ul>
                                    </ol>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </section>
        );
    }
}

export default CampeonatoIntramural;