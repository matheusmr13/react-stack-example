import React from 'react';
import ReactDOM from 'react-dom';
import App from 'services/app/container';

import { Provider } from 'react-redux';

import Store from 'services/config/redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	(
		<Provider store={Store}>
			<App />
		</Provider>
	), document.getElementById('root')
);
registerServiceWorker();
