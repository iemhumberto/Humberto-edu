import React, {Component} from 'react';
import data from '../../data/PaginasAmi';

class PagesAmi extends Component {
    Pages() {
        return data
            .Pages
            .map(page => {
                return (
                    <a
                        href={page.link}
                        style={{
                        'display': 'flex',
                        'width': '13%',
                        'height': '100%',
                        'margin': '0 8px 0 8px',
                        'borderRadius': '8px'
                    }}
                        className="card"
                        key={page.id}>
                        <div className="column card-header">
                            <strong>{page.name}</strong>
                            <div className="card-media">
                                <img
                                    style={{
                                    'width': '100%',
                                    'borderRadius': '8px'
                                }}
                                    src={page.imageUrl}
                                    alt="Imagen de página amiga"/>
                            </div>
                        </div>
                    </a>
                );

            })
    }
    render() {
        return (
            <div
                style={{
                'display': 'flex',
                'justifyContent': 'center',
                'margin': '13px 0 13px 0'
            }}
                className="row">
                {this.Pages()}
            </div>
        );
    }
}

export default PagesAmi;