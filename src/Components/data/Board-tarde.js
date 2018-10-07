import React, {Component} from 'react';

class BoardTarde extends Component {
    render() {
        return (
            <section>
            <div className="row content-board">
                <div className="tile is-child notification is-primary ">
                    <div className="info-tags">
                        <div
                            style={{
                            'fontSize': '1.5em'
                        }}
                            className="tag fecha-tag">Semana:</div>
                        <div
                            style={{
                            'fontSize': '1.5em'
                        }}
                            className="tag semana-tag">Fecha:</div>
                        <div
                            style={{
                            'fontSize': '1.5em'
                        }}
                            className="tag other-tag">Otro:</div>
                    </div>
                </div>
            </div>
            <section className="dias-semana-info">
                {/*Lunes*/}
                <div className="card space-around">
                    <div className="card-header">
                        <p>Lunes</p>
                    </div>
                    <div className="card-content"></div>
                    <div className="content"></div>
                </div>
                {/*Martes*/}
                <div className="card space-around">
                    <div className="card-header">
                        <p>Martes</p>
                    </div>
                    <div className="card-content"></div>
                    <div className="content"></div>
                </div>
                {/*Miércoles*/}
                <div className="card space-around">
                    <div className="card-header">
                        <p>Miércoles</p>
                    </div>
                    <div className="card-content"></div>
                    <div className="content"></div>
                </div>
                {/*Jueves*/}
                <div className="card space-around">
                    <div className="card-header">
                        <p>Jueves</p>
                    </div>
                    <div className="card-content"></div>
                    <div className="content"></div>
                </div>
                {/*Viernes*/}
                <div className="card space-around">
                    <div className="card-header">
                        <p>Viernes</p>
                    </div>
                    <div className="card-content"></div>
                    <div className="content"></div>
                </div>
            </section>
        </section>
        );
    }
}

export default BoardTarde;