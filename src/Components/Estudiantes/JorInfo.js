import React from 'react';
import {Link} from 'react-router-dom';
export const JorInfo = () => (
    <section>
        <div>
            <h2 className="titulo-por-jornada">Elija su jornada para ver más información:</h2>
        </div>
        <div style={{
            'marginTop': '20px'
        }} className="b-jornadas">
            <Link to="/agenda-tarde">
                <div
                    style={{
                    'fontSize': '20px'
                }}
                    className="button is-info">Jornada Mañana</div>
            </Link>
            <Link to="/agenda-mañana">
                <div
                    style={{
                    'fontSize': '20px'
                }}
                    className="button is-danger">Jornada Tarde</div>
            </Link>
        </div>
    </section>
)