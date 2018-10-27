import React, {Component} from 'react';

/*Import de componentes página */
/*Página de intro principal*/
import Intro from './Components/Intro';
import Docentes from './Components/Pages/Docentes';
import Estudiantes from './Components/Pages/Estudiantes';
import Visitantes from './Components/Pages/Visitantes';
import {NotFound} from './Components/Pages/NotFound';
import Home from './Components/Home';
import Eventos from './Components/Pages/Eventos';
import MiInstitucion from './Components/Pages/Mi-institucion';
import Simbolos from './Components/Pages/Simbolos';
import Talentos from './Components/Pages/Talentos';
import PaginasAmigas from './Components/Pages/Paginas-amigas';

/*Eventos que cambiarán constantemente*/
import HumberBici from './Components/Pages/Components/Humber-bici';
import CampeonatoIntramural from './Components/Pages/Components/Campeonato-intramural';
import ExpoDay from './Components/Pages/Components/Expo-Day';

import {Switch, Route} from 'react-router-dom';

class Router extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Intro}></Route>
                    <Route exact path="/inicio" component={Home}></Route>
                    <Route exact path="/docentes" component={Docentes}></Route>
                    <Route exact path="/estudiantes" component={Estudiantes}></Route>
                    <Route exact path="/visitantes" component={Visitantes}></Route>
                    <Route exact path="/eventos" component={Eventos}></Route>
                    <Route exact path="/humber-ruedas" component={HumberBici}></Route>
                    <Route exact path="/campeonato-intramural" component={CampeonatoIntramural}></Route>
                    <Route exact path="/paginas-amigas" component={PaginasAmigas}></Route>
                    <Route exact path="/mi-institucion" component={MiInstitucion}></Route>
                    <Route exact path="/simbolos" component={Simbolos}></Route>
                    <Route exact path="/talentos" component={Talentos}></Route>
                    <Route exact path="/expo-day" component={ExpoDay}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </div>
        );
    }
}

export default Router;