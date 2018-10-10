import React, {Component} from 'react';

/*Import de images-beneficio para las cards gradients */
const DeporteCard = 'https://media.giphy.com/channel_assets/sports/P658KMA9mwy4.gif';
const IntelectoCard = 'https://media.giphy.com/media/yoJC2GBlQUYFF12X3W/giphy.gif';
const InfraestCard = 'https://www.newthoughtitsolutions.com/images/it-infrastructure.gif';
const TalentoCard = 'https://www.august.com.au/wp-content/uploads/2016/03/Organisational-Nirvana_head' +
        'er.gif';

class Gradients extends Component {
    render() {
        return (
            <section>
                <section className="row">
                    <div className="cardDeporte"></div>
                    <div className="cardIntelecto"></div>
                    <div className="cardInfraestructura"></div>
                    <div className="cardTalento"></div>
                </section>
            </section>
        );
    }
}

export default Gradients;