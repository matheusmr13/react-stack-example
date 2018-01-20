import React from 'react';
import logo from 'images/logo.svg';
import SongList from 'views/song-list';
import './App.css';

const App = () => (
	<div className="App">
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Welcome to React</h1>
		</header>
		<SongList />
	</div>
);

export default App;
