import React, { Component } from 'react';
import PlaylistsContainer from 'services/playlist/container';
import FilterContainer from 'services/filter/container';
import Login from 'views/login';

import './App.css';

class App extends Component {
	componentDidMount() {
		this.props.fetchLoggedUser();
	}

	render() {
		const { loggedUser } = this.props;

		if (!loggedUser) {
			return <Login />;
		}

		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to Spotifood</h1>
				</header>
				<FilterContainer />
				<PlaylistsContainer />
			</div>
		);
	}
}

export default App;
