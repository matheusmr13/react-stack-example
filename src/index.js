import React from 'react';
import ReactDOM from 'react-dom';
import App from 'services/app/container';

import { Provider } from 'react-redux';

import Store from 'services/config/redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppService from 'services/app/service';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

AppService.checkLoggedUser();

ReactDOM.render(
	(
		<MuiThemeProvider>
			<Provider store={Store}>
				<App />
			</Provider>
		</MuiThemeProvider>
	), document.getElementById('root')
);
registerServiceWorker();
