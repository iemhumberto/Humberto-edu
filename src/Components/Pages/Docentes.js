import React, {Component} from 'react';
import DocInsignia from '../../Components/Docentes/DocInsignia';
import Footer from '../../Components/Footer';
import PagesAmi from '../../Components/Docentes/Components/PagesAmi';

class Docentes extends Component {
    render() {
        return (
            <div>
                <section className="hero is-medium is-primary is-bold header-salon-docentes">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title doc-title">Bienvenido, Docente.</h1>
                            <h2 className="subtitle doc-subtitle">Herramientas e información a su
                                <strong><br/>alcance</strong>
                            </h2>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <h3 className="title is-3 doc-titulo-principal">Instruyendo profesionales</h3>
                    </div>
                </section>
                <PagesAmi/>
                <DocInsignia/>
                <Footer/>
            </div>
        );
    }
}

export default Docentes;