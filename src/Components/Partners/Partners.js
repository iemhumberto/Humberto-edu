import React, {Component} from 'react';

/*Import de data para cards*/
import data from './Data';

class Partners extends Component {
    Partners() {
        return data
            .Partners
            .map(Partner => {
                return (
                    <div
                        style={{
                        'display': 'flex',
                        'width': '33%',
                        'margin': '10px 10px',
                        'padding': '15px',
                        'borderRadius': '10px'
                    }}
                        key={Partner.id}className="card" >
                        <div
                            style={{
                            'fontWeight': 'bold'
                        }}
                            className="card-header">{Partner.name}</div>
                        <div
                            style={{
                            'justifyContent': 'center'
                        }}
                            className="card-media">
                            <img
                                style={{
                                'justifyContent': 'center',
                                'borderRadius': '4px',
                                'margin': '5px'
                            }}
                                src={Partner.imageUrl}
                                alt="Imagenes de Parnets"/>
                            <div
                                style={{
                                'display': 'flex',
                                'justifyContent': 'center'
                            }}
                                className="column tag is-info">{Partner.role}</div>
                        </div>
                        <div className="card-content">
                            <div className="content">{Partner.description}</div>
                        </div>
                    </div>
                )
            })
    }

    render() {
        return (
            <section>
                <section className="column">
                    <div className="title content has-text-centered">Nuestros Colaboradores</div>
                    <div className="subtitle content has-text-centered">En la construcción de una plataforma para una mejor <strong>Educación.</strong></div>
                </section>
                <section
                    style={{
                    'display': 'flex',
                    'justifyContent': 'center',
                    'margin': '10px 10px',
                    'alignSelf': 'center',
                    'marginBottom':'20px'
                }}
                    className="row is-desktop">
                    {this.Partners()}</section>
            </section>
        );
    }
}

export default Partners;