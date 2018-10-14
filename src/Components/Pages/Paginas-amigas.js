import React, {Component} from 'react';
import data from '../data/PaginasAmi';
import Footer from '../Footer';

class PaginasAmigas extends Component {
    Pages() {
        return data
            .Pages
            .map(page => {
                return (
                    <a
                        href={page.link}
                        className="card"
                        key={page.id}
                        style={{
                        'display': 'flex',
                        'width': '33%',
                        'margin': '10px 10px',
                        'padding': '15px',
                        'borderRadius': '10px'
                    }}
                        to={page.link}>
                        <div className="card-header">
                            <strong>{page.name}</strong>
                        </div>
                        <div className="card-media is-vertical">
                            <img
                                style={{
                                'borderRadius': '10px',
                                'margin': 'auto auto auto 10px'
                            }}
                                src={page.imageUrl}
                                alt="Imagen de page destino"/></div>
                    </a>
                )
            })
    }
    render() {
        return (
            <section>
                <section className="hero is-info">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">Páginas amigas</h1>
                            <h2 className="subtitle">Aquí puedes encontrar la recopilación de páginas amigas.</h2>
                        </div>
                    </div>
                </section>
                <section
                    style={{
                    'display': 'flex',
                    'justifyContent': 'center',
                    'margin': '10px 10px',
                    'alignSelf': 'center'
                }}
                    className="row is-desktop">
                    {this.Pages()}
                </section>
                <Footer/>
            </section>
        );
    }
}
export default PaginasAmigas;