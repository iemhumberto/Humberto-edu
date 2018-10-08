import React, {Component} from 'react';

/*Import de componentes página */
/*Página de intro principal*/
import Intro from './Components/Intro';
import Docentes from './Components/Pages/Docentes';
import Estudiantes from './Components/Pages/Estudiantes';
import Visitantes from './Components/Pages/Visitantes';
import {NotFound} from './Components/Pages/NotFound';
import Home from './Components/Home';
import AgendaMañana from './Components/Pages/agenda-mañana';
import AgendaTarde from './Components/Pages/agenda-tarde';

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
                    <Route exact path="/agenda-mañana" component={AgendaMañana}></Route>
                    <Route exact path="/agenda-tarde" component={AgendaTarde}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </div>
        );
    }
}

export default Router;