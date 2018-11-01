import React, {Component} from 'react';
import Footer from '../Footer';

class ChangeLog extends Component {
    render() {
        return (
            <section>
                <div className="container is-desktop">
                    <h1 className="title">Versión 1.0 Beta</h1>
                    <div className="content">
                        <p>Lanzamiento oficial de la plataforma. Agregados a producción los siguientes
                            elementos:</p>
                        <ol type="1">
                            <li>Habilitado la sección de docentes.</li>
                            <li>Tablero informativo para estudiantes y docentes.</li>
                            <ul type="A">
                                <li>Jornada mañana</li>
                                <li>Jornada tarde</li>
                            </ul>
                        </ol>
                        <p>Agregado el chatBot con inteligencia artificial. Está en desarrollo el
                            aprendizaje máquina.</p>
                        <p>Los estudiantes tienen la posibilidad de encontrar información para integrar en stack de
                            aprendizaje y de estudio.
                        </p>
                        <p>Agregadas herramientas con objetivo:</p>
                        <ul>
                            <li>Productividad</li>
                            <li>Escritura</li>
                            <li>Para presentaciones</li>
                        </ul>
                        <p>Herramientas diseñadas por <code>core en Software</code> del colegio.</p>
                        <ol>
                            <li>Eventify</li>
                            <p className="tag is-primary">Búsqueda de eventos por lugar y/o categoría.</p>
                            <li>Bibliotech</li>
                            <p className="tag is-primary">Stand de documentación y archivos recursivos para la educación.</p>
                            <li>See plus</li>
                            <p className="tag is-primary">Herramienta para la búsqueda y descarga de imágenes 100% libre de copyright.</p>
                            <li>Álbums</li>
                            <p className="tag is-primary">Versión Alpha.</p>
                            <p className="tag is-info">Álbums de la institución. Reestructuración del proyecto y
                            reubicación de los Assets.</p>
                        </ol>
                    </div>
                </div>
                <Footer/>
            </section>
        );
    }
}

export default ChangeLog;