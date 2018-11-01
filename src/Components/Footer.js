import React, {Component} from 'react';
import {Link} from 'react-router-dom';

/*Import de elementos del Layout*/

class Footer extends Component {
    render() {
        const style = {
            'display': 'inlineBlock',
            'margin': 'auto auto'
        };
        return (
            <footer className="footer footer-size">
                <div className="content has-text-centered">
                    <p className="footer-desp">IEM Humberto Muñoz Ordoñez | 2018</p>
                    <p className="footer-version">Versión
                        <strong>1.0 Beta</strong>
                    </p>
                </div>
                <Link to="/changelog">
                    <p style={style} className="container has-text-centered">Ver cambios en la plataforma</p>
                </Link>
            </footer>
        );
    }
}

export default Footer;