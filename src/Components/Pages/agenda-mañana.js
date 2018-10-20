import React, {Component} from 'react';
import Footer from '../../Components/Footer';
import '../../App.scss';

/*Import del board data de jornada mañana*/
import BoardManana from '../../Components/data/Board-mañana';

const BookAni = 'https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif';
class AgendaMañana extends Component {
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
                    <span className="tag is-info is-medium b-identificador">Jornada Mañana</span>
                </div>
                <section></section>
                <section>
                    <BoardManana/>
                </section>
                <Footer/>
            </section>
        );
    }
}

export default AgendaMañana;