import React, {Component} from 'react';

class MisionMision extends Component {
    render() {
        return (
            <section
                style={{
                'display': 'flex',
                'justifyContent': 'center'
            }}
                className="row">
                <div
                    style={{
                    'display': 'flex',
                    'width': '40%',
                    'margin': '20px 20px 20px 20px',
                    'padding': '10px',
                    'borderRadius': '10px',
                    'boxShadow': '3px 3px 20px rgba(0, 0, 0, .5)'
                }}
                    className="card">
                    <div className="card-content">
                        <div className="content">
                            <p
                                style={{
                                'color': 'gray'
                            }}
                                className="title">Misión</p>
                            <p>

                                La Institución Educativa Municipal Humberto Muñoz Ordoñez de Pitalito Huila, de
                                carácter oficial ofrece los servicios educativos en los Niveles de Preescolar,
                                Básica, Media Académica, Técnica y educación por ciclos para adultos; propicia a
                                través de propuestas pedagógicas actuales y la implementación de Nuevas
                                Tecnologías de la Información (TICs), la formación integral de ciudadanos
                                autónomos, respetuosos de la dignidad y los derechos humanos; con espíritu
                                investigativo, competencias tecnológicas y cívicas; dentro de un ambiente
                                democrático, participativo y pluralista; acorde a las necesidades de una
                                sociedad globalizada.</p>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                    'display': 'flex',
                    'width': '40%',
                    'padding': '10px',
                    'borderRadius': '10px',
                    'margin': '20px 20px 20px 20px',
                    'boxShadow': '3px 3px 20px rgba(0, 0, 0, .5)'
                }}
                    className="card">
                    <div className="card-content">
                        <div className="content">
                            <p
                                style={{
                                'color': 'gray'
                            }}
                                className="title">Visión</p>
                            <p>En el año 2022 la Institución Educativa Humberto Muñoz Ordoñez será una
                                Institución reconocida en el contexto municipal y departamental , en los Niveles
                                de Educación Preescolar, Básica, Media Académica, Técnica articulada con el SENA
                                y educación por ciclos para adultos, consolidada en los ámbitos académicos,
                                deportivos, cultural e investigativos; estableciendo convenios y articulación
                                con las universidades; donde, su comunidad educativa estará catalogada en el
                                nivel muy superior de las pruebas SABER, con una infraestructura óptima, dotada
                                con excelentes ayudas educativas basadas en las TICs, con un excelente grupo de
                                docentes y administrativos que la conduzcan al mejoramiento continuo de su
                                proyecto educativo institucional.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default MisionMision;