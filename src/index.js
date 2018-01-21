import React from 'react';
import ReactDOM from 'react-dom';

import AppService from 'services/app/service';
import Main from 'views/main';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

AppService.checkLoggedUser();

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
