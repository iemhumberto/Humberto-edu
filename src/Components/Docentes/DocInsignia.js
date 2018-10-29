import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Medal = 'https://res.cloudinary.com/cristiansam/image/upload/v1538926584/Docentes-insigni' +
        'a-Humberto-Munoz.svg';

const LeoV = 'https://res.cloudinary.com/cristiansam/image/upload/v1538929250/Docentes/Leonor-' +
        'Valencia.jpg';
const Jorguen = 'https://res.cloudinary.com/cristiansam/image/upload/v1538929252/Docentes/Jorgen-' +
        'Henao-Humberto-Munoz.jpg';
const CarlosG = 'https://res.cloudinary.com/cristiansam/image/upload/v1538929250/Docentes/Carlos-' +
        'Gomez-Humberto-Munoz.jpg';

class DocInsignia extends Component {
    render() {
        const style= {
            'display':'flex',
            'justifyContent':'center',
            'alignContent':'center',
            'width':'10%',
            'margin':'auto auto'
        }
        return (
            <section>
                <div className="insignia-icon">
                    <img src={Medal} alt="Ícono de Insignia"/>
                </div>
                <div className="insignia-description">
                    <h2>
                        <strong>Docentes destacados</strong>
                    </h2>
                </div>
                <h3 style={style} className="tag column">Jornada mañana</h3>
                <div>
                    <ul className="Docentes-insignia clearfix">
                        <div className="maestro">
                            <img src={LeoV} alt="Maestro Insignia"/>
                            <p>Leonor Valencia</p>
                        </div>
                        <div className="maestro">
                            <img src={Jorguen} alt="Maestro Insignia"/>
                            <p>Jorguen Henao</p>
                        </div>
                        <div className="maestro">
                            <img src={CarlosG} alt="Maestro Insignia"/>
                            <p>Carlos Gómez</p>
                        </div>
                    </ul>
                    <Link to="/docentes-insignia">
                        <div className="button is-active boton-ir-doc-insignia">Acerca de ellos</div>
                    </Link>
                </div>
                {/*Segundo elemento de Docentes*/}
                <div className="insignia-icon">
                    <img src={Medal} alt="Ícono de Insignia"/>
                </div>
                <div className="insignia-description">
                    <h2>
                        <strong>Docentes destacados</strong>
                    </h2>
                </div>
                <h3 style={style} className="tag column">Jornada tarde</h3>
                <div>
                    <ul className="Docentes-insignia clearfix">
                        <div className="maestro">
                            <img src={LeoV} alt="Maestro Insignia"/>
                            <p>Leonor Valencia</p>
                        </div>
                        <div className="maestro">
                            <img src={Jorguen} alt="Maestro Insignia"/>
                            <p>Jorguen Henao</p>
                        </div>
                        <div className="maestro">
                            <img src={CarlosG} alt="Maestro Insignia"/>
                            <p>Carlos Gómez</p>
                        </div>
                    </ul>
                    <Link to="/docentes-insignia">
                        <div className="button is-active boton-ir-doc-insignia">Ver acerca de ellos</div>
                    </Link>
                </div>
            </section>
        );
    }
}

export default DocInsignia;