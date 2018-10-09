import React, {Component} from 'react';
import Footer from '../Footer';

/*Import de los eventos principales */
import EventsPrincipal from '../Eventos/Events-principal';

class Eventos extends Component {
    render() {
        return (
            <section>
                <section className="hero is-sucess is-medium">
                    <div className="hero-body eventos-container">
                        <div className="container has-text-centered">
                            <h2 className="title titulo-events">Eventos y actividades</h2>
                            <h3 className="subtitle subtitulo-events">Entérese de todas las actividades próximas en nuestra Institución</h3>
                        </div>
                    </div>
                    <EventsPrincipal/>
                </section>
                <Footer/>
            </section>
        );
    }
}

export default Eventos;