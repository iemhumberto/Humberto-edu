import React, {Component} from 'react';
import data from './DataRecursos/recursos';

/*imports styles*/
import '../../../Styles/Recursos.scss';

class RecursosDoc extends Component {
    Recursos() {
        return data
            .recursos
            .map(recurso => {
                return <section
                    key={recurso.id}
                    style={{
                    'display': 'flex',
                    'width': '45%',
                    'borderRadius': '8px',
                    'margin': '10px 10px',
                    'backgroundImage': `url(${recurso.backImage})`,
                    'backgroundPosition': 'center',
                    'backgroundSize': 'cover',
                    'backgroundColor': 'rgb(100, 100, 100)',
                    'backgroundBlendMode': 'soft-light'
                }}
                    className="hero is-medium is-primary is-bold recursos-style">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">{recurso.name}</h1>
                            <h2 className="subtitle">{recurso.description}</h2>
                            <img
                                className="row"
                                style={{
                                'display': 'flex',
                                'width': '60px',
                                'height': '60px'
                            }}
                                src={recurso.icon}
                                alt="Ícono para objetivo"/>
                        </div>
                    </div>
                    <a href={recurso.url}>
                        <button
                            style={{
                            'width': '100%'
                        }}
                            className="button is-info">{recurso.bdescription}</button>
                    </a>
                </section>
            })
    }
    render() {
        return (
            <section
                style={{
                'display': 'flex',
                'justifyContent': 'center'
            }}
                className="row">
                {this.Recursos()}
            </section>
        );
    }
}

export default RecursosDoc;