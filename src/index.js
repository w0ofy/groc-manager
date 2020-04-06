import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './serviceWorker';
import initLogrocket from './services/logrocket';

initLogrocket();

ReactDOM.render(<App />, document.getElementById('root'));

unregister();
