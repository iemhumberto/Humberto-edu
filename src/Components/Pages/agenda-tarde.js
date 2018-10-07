import React, {Component} from 'react';
import Footer from '../../Components/Footer';
import '../../App.css';

const BookAni = 'https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif';
class AgendaTarde extends Component {
    render() {
        return (
            <section>
                <div className="row">
                    <div className="book-mañana">
                        <img src={BookAni} alt="Animación del dashboard"/>
                    </div>
                    <div className="card tarjeta-informativa">
                        <div className="card-header-title">
                            <p>Agenda informativa</p>
                        </div>
                        <div className="card-content">
                            <div className="content">
                                <p>Mantener informados a los estudiantes de la Institución es prioridad.
                                    Ofrecemos la información semanal por jornadas generales.
                                </p>
                            </div>
                        </div>
                    </div>
                    <span className="tag is-primary is-medium b-identificador">Jornada Tarde</span>
                </div>
                <section></section>
                <Footer/>
            </section>
        );
    }
}

export default AgendaTarde;