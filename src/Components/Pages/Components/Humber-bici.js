import React, {Component} from 'react';
import Footer from '../../Footer';

class HumberBici extends Component {
    render() {
        return (
            <section>
                <div className="titulo-evento-en-particular">
                    <p>Humber sobre ruedas | Evento</p>
                </div>
                <section className="row">
                    <div className="eventos-tarjetas"></div>
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
                            className="tag is-primary">Gratis</span>
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
                            className="tag is-primary">21 Octube - 6:30 AM</span>
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
                                className="title">Humber sobre ruebas (30 km)</h2>
                        </div>
                        <div className="card-content">
                            <div className="content contenido-tarjeta-eventos">
                                <p
                                    style={{
                                    'color': 'gray'
                                }}>
                                    <strong>Salida parqueadero - Sede principal</strong>
                                </p>
                                <p>Por la ruta hacia la escuela Cálamo por la derecha y finca Pompeya. Subimos
                                    hasta el cruce Miravalles, Zelandia, el Tigre. Llegamos a vía nacional, cruce
                                    Guacacallo, La Palma, Regueros y finalmente "Arco Iris".
                                </p>
                            </div>
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
                                <ul>
                                    <li>
                                        <p>Tres puntos de hidratación.</p>
                                    </li>
                                    <li>
                                        <p>Número - Medalla - Manilla.</p>
                                    </li>
                                    <li>
                                        <p>Premios sopresa.</p>
                                    </li>
                                    <li>
                                        <p>Carro escoba - Mecánico.</p>
                                    </li>
                                </ul>
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
                                className="title">Recomendaciones</h2>
                        </div>
                        <div className="card-content">
                            <div className="content contenido-tarjeta-eventos">
                                <p>
                                    <ol>
                                        <li>
                                            Cada participante va por su cuenta y riesgo.
                                        </li>
                                        <li>
                                            No salir del recorrido establecido.
                                        </li>
                                        <li>
                                            Respetar normas de tránsito a los participantes.
                                        </li>
                                        <li>
                                            Uso obligatorio de casco y guantes.
                                        </li>
                                        <li>
                                            Cualquier inquietud manifestarla al grupo organizador.
                                        </li>
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

export default HumberBici;