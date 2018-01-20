import React from 'react';
import logo from 'images/logo.svg';
import Playlists from 'views/playlists';

import './App.css';

const App = () => (
	<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Welcome to React</h1>
		</header>
		<Playlists />
	</div>
);

export default App;
