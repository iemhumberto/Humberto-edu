import React, {Component} from 'react';
import data from './Change-Mañana';

class BoardManana extends Component {
    Mañana() {
        return data
            .Mañana
            .map(mañana => {
                return <div className="card space-around">
                    <div className="card-header">
                        <p
                            style={{
                            'fontSize': '1.3em'
                        }}>{mañana.day}</p>
                    </div>
                    <div className="card-content"></div>
                    <div className="content">{mañana.description}</div>
                    <div
                        style={{
                        'display': 'flex',
                        'margin': '5px 10px'
                    }}
                        className="tag is-primary">{mañana.date}</div>
                </div>
            })
    }
    render() {
        return (
            <section>
                <div className="row content-board">
                    <div className="tile is-child notification is-info ">
                        <div className="info-tags">
                            <div
                                style={{
                                'fontSize': '1.5em'
                            }}
                                className="tag fecha-tag">Semana: 35</div>
                            <div
                                style={{
                                'fontSize': '1.5em'
                            }}
                                className="tag semana-tag">Fecha: Del 22 Al 26 Octubre</div>
                            <div
                                style={{
                                'fontSize': '1.5em'
                            }}
                                className="tag other-tag">Otro:</div>
                        </div>
                    </div>
                </div>
                <section className="row dias-semana-info">
                    {this.Mañana()}
                </section>
            </section>
        );
    }
}

export default BoardManana;