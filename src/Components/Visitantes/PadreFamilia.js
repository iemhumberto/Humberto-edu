import React, {Component} from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';

const PadreFlia = 'https://res.cloudinary.com/cristiansam/image/upload/v1538949609/Humberto-ui/Padr' +
        'e-de-familia.svg';

const PagAmi = 'https://res.cloudinary.com/cristiansam/image/upload/v1538952494/Humberto-ui/pagi' +
        'nas-amigas-Humberto-Munoz.svg';

const Events = 'https://res.cloudinary.com/cristiansam/image/upload/v1538953192/Docentes/eventos' +
        '-Humberto-Munoz.svg';

class PadreFamilia extends Component {
    render() {
        return (
            <section
                style={{
                'justifyContent': 'center'
            }}
                className="row">
                {/*Para padres de familia*/}
                <div className="card tarjeta-visitantes-padres">
                    <figure className="image is4by3">
                        <img src={PadreFlia} alt="Imagen header"/>
                    </figure>
                    <div className="media-content">
                        <div className="title is-4">
                            <p className="title is-4">¿Eres padre de familia?</p>
                        </div>
                    </div>
                    <div className="content description-content-parent">
                        <p>
                            Puede apreciar desde el sistema las notas de su hijo, directorio disciplinario,
                            directorio docentes, y mucho más.
                        </p>
                    </div>
                    <div className="button is-primary">
                        <a
                            style={{
                            'textDecoration': 'none',
                            'color': 'white'
                        }}
                            href="https://www.syseduca.com/asociados/login">Ir ahora</a>
                    </div>
                </div>
                {/*Ver páginas amigas*/}
                <div className="card tarjeta-visitantes-padres">
                    <figure className="image is4by3">
                        <img src={PagAmi} alt="Imagen header"/>
                    </figure>
                    <div className="media-content">
                        <div className="title is-4">
                            <p className="title is-4">Páginas amigas</p>
                        </div>
                    </div>
                    <div className="content description-content-parent">
                        <p>
                            Visite los websites o páginas web con las que tenemos enlace directo. Navegue
                            por ellas.
                        </p>
                    </div>
                    <div className="button is-info">
                        <Link
                            style={{
                            'display': 'flex',
                            'textDecoration': 'none',
                            'color': 'white'
                        }}
                            to="/paginas-amigas">Ir ahora</Link>
                    </div>
                </div>
                {/*Eventos próximos*/}
                <div className="card tarjeta-visitantes-padres">
                    <figure className="image is4by3">
                        <img src={Events} alt="Imagen header"/>
                    </figure>
                    <div className="media-content">
                        <div className="title is-4">
                            <p className="title is-4">Próximos eventos</p>
                        </div>
                    </div>
                    <div className="content description-content-parent">
                        <p>
                            Entérese de los próximos eventos y novedades (públicos) que tendremos muy
                            pronto.
                        </p>
                    </div>
                    <div className="button is-danger">
                        <Link
                            style={{
                            'display': 'flex',
                            'textDecoration': 'none',
                            'color': 'white'
                        }}
                            to="/eventos">Enterarme</Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default PadreFamilia;