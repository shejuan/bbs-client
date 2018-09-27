import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/index.less';
import Home from './pages/home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
