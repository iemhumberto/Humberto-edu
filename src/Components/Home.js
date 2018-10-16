import React, {Component} from 'react';
import '../App.css';

/*Imports de elementos del layout */
import HomeBelow from './Home-below';
import Footer from '../Components/Footer';
import Banner from '../Components/Banner';
import NavBar from '../Components/NavBar';

/*Enrutado con Link desde react-router-dom */
import {Link} from 'react-router-dom';

/*Source de las imágenes para build */

const docProfile = 'http://res.cloudinary.com/cristiansam/image/upload/v1537037797/Humberto-ui/perfi' +
        'l-docente.svg';
const estProfile = 'http://res.cloudinary.com/cristiansam/image/upload/v1537038940/Humberto-ui/perfi' +
        'l-estudiante.svg';
const visProfile = 'http://res.cloudinary.com/cristiansam/image/upload/v1537039055/Humberto-ui/perfi' +
        'l-visitantes.svg';

class Home extends Component {
    render() {
        return (
            <section>
            <div className="row">
            <NavBar/>
            </div>
            <div className="div-master">
                <section className="hero is-success is-fullheight header-principal">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title iem">
                                <p>IEM</p>
                            </h1>
                            <h2 className="sub-institute">Humberto Muñoz Ordoñez</h2>
                            <h2 className="subtitle descp-obj">"Aprender a aprender y Triunfar"</h2>
                        </div>
                        {/*Primer card*/}
                        <div className="card-master">
                            <div className="card roles">
                                <div className="card-header">
                                    <div className="card-header-title">
                                        <p className="item-background-doc">Docentes</p>
                                    </div>
                                    <div className="card-content">
                                        <div className="content">
                                            <p>Contenidos para la comunidad de maestros. Manténgase actualizado.</p>
                                            <Link to="/docentes" className="button is-normal">Ir ahora</Link>
                                            <img className="img-profile-home" src={docProfile} alt="Perfil docente"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Segundo card*/}
                            <div className="card roles">
                                <div className="card-header">
                                    <div className="card-header-title">
                                        <p className="item-background-est">Estudiantes</p>
                                    </div>
                                    <div className="card-content">
                                        <div className="content">
                                            <p>Eventos, actividades, programación semanal para nuestros estudiantes.</p>
                                            <Link to="/estudiantes" className="button is-normal">Ir ahora</Link>
                                            <img className="img-profile-home" src={estProfile} alt="Perfil docente"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Finaliza card en cuestión*/}
                            {/*Tercer card*/}
                            <div className="card roles">
                                <div className="card-header">
                                    <div className="card-header-title">
                                        <p className="item-background-vis">Visitantes</p>
                                    </div>
                                    <div className="card-content">
                                        <div className="content">
                                            <p>Conozca, aprenda y contribuya con la comunidad estudiantil interconectada.</p>
                                            <Link to="/visitantes" className="button is-normal">Ir ahora</Link>
                                            <img className="img-profile-home" src={visProfile} alt="Perfil visitante"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Finaliza card en cuestión*/}
                        </div>
                    </div>
                </section>
                <section>
                    <HomeBelow/>
                    <Banner/>
                    <Footer/>
                </section>
            </div>
            </section>
        );
    }
}
export default Home;