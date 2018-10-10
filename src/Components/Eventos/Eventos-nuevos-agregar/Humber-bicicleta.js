import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HumbertoBicicleta extends Component {
    render() {
        return (
            <section>
                <Link to="/humber-ruedas">
                    <div
                        style={{
                        'justifyContent': 'center',
                        'alignSelf': 'center',
                    }}
                        className="blog-card spring-fever event-one">
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
                                <li className="date">21 Octube 2018 (Jornada mañana)</li>
                            </ul>
                        </div>
                        <div className="gradient-overlay"></div>
                        <div className="color-overlay"></div>
                    </div>
                </Link>
            </section>
        );
    }
}

export default HumbertoBicicleta;