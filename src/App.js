import React, {Component} from 'react';
import './App.scss';
import NotFound from './pages/NotFound';

/*Elementos de UI credos*/
import Home from './Components/Home';

class App extends Component {
    render() {
        return (
            <div>
                <Home/>
            </div>
        );
    }
}

export default App;