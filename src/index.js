import React from 'react';
import ReactDOM from 'react-dom';
import './screens/Home/home.css';
import App from './screens/Home/home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
