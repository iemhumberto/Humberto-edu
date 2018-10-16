import React, {Component} from 'react';
import '../App.css';

class Banner extends Component {
    render() {
        return (
            <div className="row">
                <div style={{'margin':'50px', 'borderRadius':'8px'}} className="social-media">
                    <div className="follow">
                        <p>Comunidad Humbertista en redes Sociales.</p>
                    </div>
                    <a href="https://instagram.com">
                        <i className="fab fa-instagram icons"></i>
                    </a>
                    <a href="https://facebook.com">
                        <i className="fab fa-facebook-f icons"></i>
                    </a>
                    <a href="https://twitter.com">
                        <i className="fab fa-twitter-square icons"></i>
                    </a>
                    <a href="https://youtube.com">
                        <i className="fab fa-youtube icons"></i>
                    </a>
                    <div className="link-col">
                        <a href="https://unsplash.com">Galería fotográfica
                            <i className="fas fa-images"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;