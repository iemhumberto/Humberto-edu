import React, {Component} from 'react';
import {JorInfo} from '../../Components/Estudiantes/JorInfo';
import Footer from '../../Components/Footer';

/*Imports de las herramientas para estudiantes */
import ToolsEstudiar from '../../Components/Estudiantes/ToolsEstudiar';

class Estudiantes extends Component {
    render() {
        return (
            <section>
                <section className="hero is-medium is-primary is-bold header-salon-estudiantes">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title doc-title">Bienvenido, Humbertista.</h1>
                            <h2 className="subtitle doc-subtitle">Estudiar es nuestra
                                <strong><br/>pasión</strong>
                            </h2>
                        </div>
                    </div>
                </section>
                <section>
                    <JorInfo/>
                </section>
                <section>
                    <ToolsEstudiar/>
                </section>
                <section>
                    <Footer/>
                </section>
            </section>
        );
    }
}

export default Estudiantes;