import React, {Component} from 'react';

/*Import de componentes página */
import Docentes from './Components/Pages/Docentes';
import Estudiantes from './Components/Pages/Estudiantes';
import Visitantes from './Components/Pages/Visitantes';
import {NotFound} from './Components/Pages/NotFound';
import Home from './Components/Home';

import {Switch, Route} from 'react-router-dom';

class Router extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/docentes" component={Docentes}></Route>
                    <Route exact path="/estudiantes" component={Estudiantes}></Route>
                    <Route exact path="/visitantes" component={Visitantes}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </div>
        );
    }
}

export default Router;