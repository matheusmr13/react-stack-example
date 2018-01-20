import React, { Component } from 'react';
import PlaylistsContainer from 'services/playlist/container';
import Filter from 'views/filter';

import './App.css';

class App extends Component {
	componentDidMount() {
		this.props.fetchLoggedUser();
	}

	render() {
		console.info(this.props);
		const { loggedUser } = this.props;

		if (!loggedUser) {
			return 'Loading';
		}

		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to Spotifood</h1>
				</header>
				<Filter />
				<PlaylistsContainer />
			</div>
		);
	}
}

export default App;
