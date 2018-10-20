import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
/*Import del BrowserRouter */
import {BrowserRouter} from 'react-router-dom';
/*Import del Router */
import Router from './Router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
    <Router/>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
