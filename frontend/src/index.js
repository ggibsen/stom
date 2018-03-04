import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import HelloWorld from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<HelloWorld title="Testgg1"/>, document.getElementById('rootNew'));

registerServiceWorker();
