import React, {Component} from 'react';
import {Link} from 'react-router-dom';
/*Componente de Bienvenida 2019. Nuevo año escolar.*/
import Welcome2019 from '../Flash-Components/Welcome';
import Wtext from '../Flash-Components/Wtext';
const MovilVersion = 'http://m.humberto-edu.surge.sh';

class Intro extends Component {
    render() {
        return (
            <section className="hero is-success is-fullheight intro-image">
                <Welcome2019/>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title intro-titulo">Bienvenido (a)</h1>
                        <p
                            style={{
                            'fontSize': '1.3em'
                        }}>Por favor seleccione su dispositivo en cuestión para continuar:</p>
                        <div className="b-elegir-dispositivo container has-text-centered">
                            <a href={MovilVersion}>
                                <div
                                    style={{
                                    'fontSize': '1.3em',
                                    'margin': '10% 0 10% 0',
                                    'textDecoration': 'none'
                                }}
                                    className="button is-info">Dispositivo Móvil</div>
                            </a>
                            <Link to="/inicio">
                                <div
                                    style={{
                                    'fontSize': '1.3em',
                                    'textDecoration': 'none'
                                }}
                                    className="button is-primary">Computador PC</div>
                            </Link>
                        </div>
                    </div> 
                </div>
                <Wtext/>
            </section>
        );
    }
}

export default Intro;