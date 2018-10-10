import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CampeonatoEvento extends Component {
    render() {
        return (
            <section>
                {/*Campeonato intramural */}
                <Link to="/campeonato-intramural">
                    <div
                        style={{
                        'justifyContent': 'center',
                        'alignSelf': 'center',
                    }}
                        className="blog-card spring-fever-football event-one">
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
                                <li className="date">17 Octubre 2018 (Jornada Mañana)</li>
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

export default CampeonatoEvento;