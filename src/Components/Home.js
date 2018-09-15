import React, {Component} from 'react';
import '../App.css';

class Home extends Component {
    render() {
        return (
            <section className="hero is-success is-fullheight header">
                <div className="hero-body">
                    <div class="container">
                        <h1 class="title iem">
                            IEM
                        </h1>
                        <h2 className="sub-institute">Humberto Muñoz Ordoñez</h2>
                        <h2 className="descp-obj">"Conectando intelecto y medios digitales"</h2>
                    </div>
                    {/*Primer card*/}
                    <div className="card-master">
                        <div className="card roles">
                            <div className="card-header">
                                <div className="card-header-title">
                                    Docentes
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <p>Contenidos para la comunidad de maestros. Manténgase actualizado.</p>
                                        <a class="button is-normal">Ir ahora</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Segundo card*/}
                        <div className="card roles">
                            <div className="card-header">
                                <div className="card-header-title">
                                    Estudiantes
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <p>Eventos, actividades, programación semanal para nuestros estudiantes.</p>
                                        <a class="button is-normal">Ir ahora</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Finaliza card en cuestión*/}
                        {/*Tercer card*/}
                        <div className="card roles">
                            <div className="card-header">
                                <div className="card-header-title">
                                    Visitantes
                                </div>
                                <div className="card-content">
                                    <div className="content">
                                        <p>Conozca, aprenda y contribuya con la comunidad estudiantil interconectada.</p>
                                        <a class="button is-normal">Ir ahora</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Finaliza card en cuestión*/}
                    </div>
                </div>
            </section>
        );
    }
}
export default Home;