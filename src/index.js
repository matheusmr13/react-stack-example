import React from 'react';
import ReactDOM from 'react-dom';
import App from 'services/app/container';

import { Provider } from 'react-redux';

import Store from 'services/config/redux';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppService from 'services/app/service';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

AppService.checkLoggedUser();

ReactDOM.render(
	(
		<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
			<Provider store={Store}>
				<App />
			</Provider>
		</MuiThemeProvider>
	), document.getElementById('root')
);
registerServiceWorker();
