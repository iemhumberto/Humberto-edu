import React, {Component} from 'react';
import PadreFamilia from '../../Components/Visitantes/PadreFamilia';
import Footer from '../../Components/Footer';
import Gallery from '../Socials/Gallery';

class Visitantes extends Component {
    render() {
        return (
            <section>
                <section className="hero is-medium is-primary is-bold header-visitantes">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title doc-title">Saludos, Visitante.</h1>
                            <h2 className="subtitle doc-subtitle">Conoce nuestra grandiosa
                                <strong><br></br>
                                    comunidad</strong>
                            </h2>
                        </div>
                    </div>
                </section>
                <section>
                    <PadreFamilia/>
                </section>
                <Gallery className="gallery-container"/>
                <Footer/>
            </section>
        );
    }
}

export default Visitantes;