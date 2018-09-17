import React, {Component} from 'react';

const EstEnv = 'http://res.cloudinary.com/cristiansam/image/upload/v1537144345/Humberto-ui/class' +
        'room.svg';
class HomeBelow extends Component {
    render() {
        return (
            <div>
                <div className="column is-gapless">
                    <div className="column image-entorno">
                        <img className="column" src={EstEnv} alt="Entorno de estudio"/>
                        <p className="column texto-entorno">Prueba de texto</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeBelow;