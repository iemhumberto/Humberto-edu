import React, {Component} from 'react';
import PadreFamilia from '../../Components/Visitantes/PadreFamilia';
import Footer from '../../Components/Footer';

class Visitantes extends Component {
    render() {
        return (
            <section>
                <section className="hero is-medium is-primary is-bold header-visitantes">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title doc-title">Saludos, Visitante.</h1>
                            <h2 className="subtitle doc-subtitle">Conoce nuestra grandiosa
                                <strong>
                                    comunidad</strong>
                            </h2>
                        </div>
                    </div>
                </section>
                <section>
                    <PadreFamilia/>
                </section>
                <Footer/>
            </section>
        );
    }
}

export default Visitantes;