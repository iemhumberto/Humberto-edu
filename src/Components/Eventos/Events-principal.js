import React, {Component} from 'react';

/*Imports de los eventos*/
import HumbertoBicicleta from '../../Components/Eventos/Eventos-nuevos-agregar/Humber-bicicleta';
import CampeonatoEvento from '../../Components/Eventos/Eventos-nuevos-agregar/Campeonato-intra';
import ExpoDay from '../../Components/Eventos/Eventos-nuevos-agregar/ExpoDay';

class EventsPrincipal extends Component {
    render() {
        return (
            <section>
                <section>
                    <article className="message is-info message-space">
                        <div className="message-body">
                            <strong>
                                Para ver más información de los eventos, haga Click sobre la tarjeta de su
                                interés.
                            </strong>
                        </div>
                    </article>
                </section>
                <section className="row events-direction">
                    <ExpoDay className="event-one"/> {/*Expo day */}
                    <CampeonatoEvento/> {/*Campeonato intramuros*/}
                    <HumbertoBicicleta/> {/*Humber sobre ruedas */}
                </section>
            </section>
        );
    }
}

export default EventsPrincipal;