import React from 'react';
import Playlists from 'views/playlists';
import Filter from 'views/filter';

import './App.css';

const App = () => (
	<div className="App">
		<header className="App-header">
			<h1 className="App-title">Welcome to Spotifood</h1>
		</header>
		<Filter />
		<Playlists />
	</div>
);

export default App;
