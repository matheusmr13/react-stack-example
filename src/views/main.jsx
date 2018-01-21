import React from 'react';
import App from 'services/app/container';

import { Provider } from 'react-redux';

import Store from 'services/config/redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './mui-theme';

const Main = () => (
	<MuiThemeProvider muiTheme={muiTheme}>
		<Provider store={Store}>
			<App />
		</Provider>
	</MuiThemeProvider>
);

export default Main;
