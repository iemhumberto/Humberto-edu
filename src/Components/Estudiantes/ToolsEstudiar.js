import React, {Component} from 'react';

/*Herramientas para presentaciones*/
const nuclino = 'https://d33wubrfki0l68.cloudfront.net/0d5f11ddd1bebaa00cac1831eb892e623c3a39bb/2' +
        '090d/img/press/nuclino_logo_preview.png';
const prezi = 'https://www.logolynx.com/images/logolynx/bc/bcfdda560111534502eef715b8bbec9f.jpe' +
        'g';

const GSlides = 'https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_15069' +
        '66761/google-slides.png';

const Canva = 'http://www.bestmediainfo.com/wp-content/uploads/2015/10/canva.jpg';

const swipe = 'https://i.pinimg.com/originals/a6/7a/d9/a67ad9821f009561f625c669737dec90.jpg';

/*Herramientas para productividad */

const Trello = 'https://png.icons8.com/color/1600/trello.png';
const Mtodo = 'https://mk0intowindows84fvao.kinstacdn.com/wp-content/uploads/2017/04/delete-Mic' +
        'rosfot-To-Do-account_thumb.png';
/*Herramientas para escritura y notas */

const Evernote = 'https://s24953.pcdn.co/blog/wp-content/uploads/2018/01/evernote-logo-wide.png';
const Medium = 'https://media.wired.com/photos/5a55a95af41e4c2cd9ee6cd8/master/pass/Medium-logo-' +
        'canvas.jpg';

class ToolsEstudiar extends Component {
    render() {
        return (
            <section>
                <section
                    style={{
                    'marginTop': '5%'
                }}
                    className="row presentaciones-back">
                    {/*Nuclino herramienta*/}
                    <div className="tools-presentaciones-nuclino">
                        <img className="nuclino-image" src={nuclino} alt="Nuclino presentaciones"/>
                        <p>Herramienta para presentaciones wiki colaborativas.</p>
                        <a
                            style={{
                            'display': 'flex',
                            'margin': '5px',
                            'justifyContent': 'left'
                        }}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://nuclino.com/">
                            <div className="button">Usar herramienta</div>
                        </a>
                    </div>
                    {/*Prezi herramienta*/}
                    <div className="tools-presentaciones-prezi">
                        <img className="prezi-image" src={prezi} alt="Prezi presentaciones"/>
                        <p>Diseño de presentaciones grupales y a distancia.</p>
                        <a
                            style={{
                            'display': 'flex',
                            'marginTop': '25%',
                            'justifyContent': 'center'
                        }}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://prezi.com/">
                            <div className="button">Usar herramienta</div>
                        </a>
                    </div>
                    {/*Google Slides herramienta*/}
                    <div className="tools-presentaciones-gslides">
                        <img className="GSlides" src={GSlides} alt="Google slides presentaciones"/>
                        <p>Diseño de presentaciones grupales y a distancia.</p>
                        <a
                            style={{
                            'display': 'flex',
                            'marginTop': '25%',
                            'justifyContent': 'center'
                        }}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.google.com/slides/about/">
                            <div className="button">Usar herramienta</div>
                        </a>
                    </div>
                    {/*Canva herramientas*/}
                    <div className="tools-presentaciones-canva">
                        <img className="GSlides" src={Canva} alt="Google slides presentaciones"/>
                        <p>Diseño de presentaciones. Interesantes y atractivas.</p>
                        <a
                            style={{
                            'display': 'flex',
                            'marginTop': '25%',
                            'justifyContent': 'center'
                        }}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.canva.com/es_ar/crear/presentaciones/">
                            <div className="button">Usar herramienta</div>
                        </a>
                    </div>
                    <div className="tools-presentaciones-swipe">
                        <img className="GSlides" src={swipe} alt="Google slides presentaciones"/>
                        <p>Presentaciones en conversaciones. Innovación.</p>
                        <a
                            style={{
                            'display': 'flex',
                            'marginTop': '25%',
                            'justifyContent': 'center'
                        }}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.swipe.to/">
                            <div className="button">Usar herramienta</div>
                        </a>
                    </div>
                    <div className="title titulo-presentaciones">Para crear presentaciones admirables</div>
                </section>
                {/*Herramientas de productividad*/}
                {/*Trello herramienta*/}
                <section className="row productividad-tools">
                    <div className="tools-productividad-trello">
                        <img className="Trello" src={Trello} alt="Trello. Productividad."/>
                        <p>Organize su calendario. Tareas. Haga todo estructurado. Fácil.</p>
                        <a
                            style={{
                            'display': 'flex',
                            'marginTop': '25%',
                            'justifyContent': 'center'
                        }}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https:trello.com">
                            <div className="button">Usar herramienta</div>
                        </a>
                    </div>
                    {/*Microsoft ToDo*/}
                    <div className="tools-productividad-mtodo">
                        <img
                            className="Mtodo"
                            src={Mtodo}
                            alt="Microsoft To-do. Herramienta de productividad"/>
                        <p>Agende y agregue en lista sus labores. Sea organizado.</p>
                        <a
                            style={{
                            'display': 'flex',
                            'marginTop': '25%',
                            'justifyContent': 'center'
                        }}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://todo.microsoft.com/es-es">
                            <div className="button">Usar herramienta</div>
                        </a>
                    </div>
                    <div className="title titulo-productividad">
                        <p className="productividad-fijo">Productividad</p>
                    </div>
                </section>
                {/*Herramientas par escritura*/}
                {/*Evernote*/}
                <section className="row escritura-tools">
                    <div className="col-xs-2 tools-escritura-evernote">
                        <img className="Evernote" src={Evernote} alt="Evernote. Escritura"/>
                        <p>Evernote te ayuda a capturar y establecer la prioridad de las ideas,
                            proyectos y listas de tareas, para que nada se te pase por alto.</p>
                        <a
                            style={{
                            'display': 'flex',
                            'marginTop': '25%',
                            'justifyContent': 'center'
                        }}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://evernote.com/intl/es/">
                            <div className="button">Usar herramienta</div>
                        </a>
                    </div>
                    {/*Medium post*/}
                    <div className="tools-escritura-medium">
                        <img
                            className="Medium"
                            src={Medium}
                            alt="Medium. Publica tu conocimiento."/>
                        <p>Agende y agregue en lista sus labores. Sea organizado.</p>
                        <a
                            style={{
                            'display': 'flex',
                            'marginTop': '25%',
                            'justifyContent': 'center'
                        }}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://medium.com/">
                            <div className="button">Usar herramienta</div>
                        </a>
                    </div>
                    <div className="title titulo-escritura">
                        <p className="escritura-fijo">Escritura</p>
                    </div>
                </section>
            </section>
        );
    }
}

export default ToolsEstudiar;