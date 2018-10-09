import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EventsPrincipal extends Component {
    render() {
        return (
            <section>
                <section className="row">
                    {/*Humber sobre ruedas */}
                    <Link to="/humber-ruedas">
                        <div
                            style={{
                            'justifyContent': 'center',
                            'alignSelf': 'center',
                            'margin': '10% 10% 10% 10%'
                        }}
                            className="blog-card spring-fever">
                            <div className="title-content">
                                <h1
                                    style={{
                                    'fontSize': '1.4em'
                                }}>Humber sobre ruedas</h1>
                                <hr/>
                                <div className="intro">Espectacular travesía. Trayectoria inolvidable.</div>
                            </div>
                            <div className="card-info">
                                Por la ruta hacia la escuela Cálamo por la derecha y finca Pompeya. Subimos
                                hasta el cruce Miravalles, Zelandia, el Tigre. Llegamos a vía nacional, cruce
                                Guacacallo, La Palma, Regueros y finalmente "Arco Iris".
                            </div>
                            <div className="utility-info">
                                <ul className="utility-list">
                                    <li className="date">21 Octube 2018</li>
                                </ul>
                            </div>
                            <div className="gradient-overlay"></div>
                            <div className="color-overlay"></div>
                        </div>
                    </Link>
                    {/*Campeonato intramural */}
                    <Link to="/campeonato-intramural">
                        <div
                            style={{
                            'justifyContent': 'center',
                            'alignSelf': 'center',
                            'margin': '10% 10% 10% 20%'
                        }}
                            className="blog-card spring-fever-football">
                            <div className="title-content">
                                <h1
                                    style={{
                                    'fontSize': '1.4em'
                                }}>Campeonato intramural</h1>
                                <hr/>
                                <div className="intro">Categoría Juvenil</div>
                            </div>
                            <div className="card-info">
                                Te invitamos a la gran inauguración este espectacular campeonato.
                            </div>
                            <div className="utility-info">
                                <ul className="utility-list">
                                    <li className="date">17 Octube 2018</li>
                                </ul>
                            </div>
                            <div className="gradient-overlay"></div>
                            <div className="color-overlay"></div>
                        </div>
                    </Link>
                    {/*Expo day */}
                    <Link to="/campeonato-intramural">
                        <div
                            style={{
                            'justifyContent': 'center',
                            'alignSelf': 'center',
                            'margin': '10% 10% 10% 30%'
                        }}
                            className="blog-card spring-fever-expo">
                            <div className="title-content">
                                <h1
                                    style={{
                                    'fontSize': '1.4em'
                                }}>Expo Day</h1>
                                <hr/>
                                <div className="intro">Aplicación Institucional</div>
                            </div>
                            <div className="card-info">
                                Presentación de los features de la App Institucional y sus aplicaciones
                                correspondientes.
                            </div>
                            <div className="utility-info">
                                <ul className="utility-list">
                                    <li className="date">17 Octube 2018</li>
                                </ul>
                            </div>
                            <div className="gradient-overlay"></div>
                            <div className="color-overlay"></div>
                        </div>
                    </Link>
                </section>
            </section>
        );
    }
}

export default EventsPrincipal;