import React from 'react';

const JorTarde = 'https://trello.com/b/bNaFSIMW/';
const JorMañana = 'https://trello.com/b/4pVhgD3b/';
export const JorInfo = () => (
    <section>
        <div>
            <h2 className="titulo-por-jornada">Elija su jornada para ver agenda</h2>
        </div>
        <div style={{
            'marginTop': '20px'
        }} className="b-jornadas">
            <a href={JorMañana}>
                <div
                    style={{
                    'fontSize': '20px'
                }}
                    className="button is-info">Jornada Mañana</div>
            </a>
            <a href={JorTarde}>
                <div
                    style={{
                    'fontSize': '20px'
                }}
                    className="button is-primary">Jornada Tarde</div>
            </a>
        </div>
    </section>
);