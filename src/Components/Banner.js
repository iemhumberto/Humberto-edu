import React, {Component} from 'react';
import '../Styles/SChannels.scss';

class Banner extends Component {
    render() {
        return (
            <section className="social-content" style={{'display':'flex', 'margin':'20px', 'backgroundColor':'black', 'padding':'10px'}}>
            <div className="container content has-text-centered">
            <div style={{'color':'white'}} className="title">Comunidad Humbertista</div>
            <div  style={{'color':'white'}} className="subtitle">en redes sociales</div>
            </div>
            <div className="socialIcons">
            <ul>
                <li>
                    <a href="https://facebook.com">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-facebook" aria-hidden="true"></span>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-twitter" aria-hidden="true"></span>
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-instagram" aria-hidden="true"></span>
                    </a>
                </li>
                <li>
                    <a href="https://youtube.com">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className="fab fa-youtube"></span>
                    </a>
                </li>
            </ul>
            </div>
            </section>
        );
    }
}

export default Banner;