import React from 'react';
import ReactDOM from 'react-dom';

import Main from 'views/main';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
