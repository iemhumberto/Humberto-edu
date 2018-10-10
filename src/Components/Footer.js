import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer footer-size">
                <div className="content has-text-centered">
                <p className="footer-desp">IEM Humberto Muñoz Ordoñez | 2018</p>
                <p className="footer-version">Versión <strong>0.4.0 Beta</strong></p>
                </div>
            </footer>
        );
    }
}

export default Footer;