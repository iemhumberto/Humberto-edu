import React, {Component} from 'react';

const CSamboni = 'https://avatars1.githubusercontent.com/u/24655632?s=460&v=4';
const ImageRole = 'https://media.giphy.com/media/MVY2s31jlHI88/giphy.gif';
const ImageRole1 = 'https://media.giphy.com/media/l46Cy1rHbQ92uuLXa/giphy.gif';
const ImageRole2 = 'https://media.giphy.com/media/xT8qAYZLdbmskQRhni/giphy.gif';
class ExpoDay extends Component {
    render() {
        return (
            <section>
                <section className="row">
                    <div className="col-xs-12 col-sm-6 expo-background"></div>
                    <div className="col-xs-12 col-sm-6 titulo-header-code">
                        <div>
                            <h1>Expo Day</h1>
                            <div className="row">
                                <img src={ImageRole} className="image-Role" alt="My Role. I'am developer"/>
                                <img src={ImageRole1} className="image-Role" alt="My Role. I'am developer"/>
                                <img src={ImageRole2} className="image-Role" alt="My Role. I'am developer"/>
                            </div>
                            <div className="column card tarjeta-contenido-autor">
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-48x48">
                                                <img src={CSamboni} alt="Cristian Samboni - Author"/>
                                            </figure>
                                            <div className="media-content">
                                                <p
                                                    style={{
                                                    'marginTop': '10px'
                                                }}className="title is-4">Cristian Samboni</p>
                                                <p className="subtitle is-6">@Cris_SamJS</p>
                                            </div>
                                        </div>
                                        <div className="content">
                                            En la construcción de educación. Interconectando intelecto con la Red.
                                            <br></br>
                                            <p
                                                style={{
                                                'marginTop': '20px',
                                                'backgroundColor': '#19294a',
                                                'padding': '5px',
                                                'borderRadius': '5px'
                                            }}>
                                                <a
                                                    style={{
                                                    'color': 'white'
                                                }}>Front-end Developer with React.JS</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Tags de información */}
                            <div
                                style={{
                                'display': 'flex',
                                'justifyContent': 'center',
                                'margin': '20px 20px',
                            }}
                                className="row">
                                <div
                                    style={{
                                    'marginBottom': '20px',
                                    'fontSize':'1.4em'
                                }}className="tag has-addons">
                                    <span className="tag">Lugar</span>
                                    <span className="tag is-info">Aula de conferencias.</span>
                                </div>
                                <div
                                    style={{
                                    'fontSize': '1.4em'
                                }}
                                    className="tag has-addons">
                                    <span className="tag">Para</span>
                                    <span className="tag is-info">Jornada mañana y tarde, respectivamente.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        );
    }
}

export default ExpoDay;