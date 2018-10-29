import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ExpoDay extends Component {
    render() {
        return (
            <section>
                <Link to="/expo-day">
                    <div
                        style={{
                        'justifyContent': 'center',
                        'alignSelf': 'center',
                    }}
                        className="blog-card spring-fever-expo event-one">
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
                                <li className="date">31 Octube 2018 (Ambas Jornadas)</li>
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

export default ExpoDay;