import React, { Component } from 'react';

const SPOTIFY_LOGIN_URL = `${process.env.REACT_APP_SPOTIFY_AUTH_URL}?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=token&redirect_uri=${window.location.href}`;
class Login extends Component {
	state = {}
	render() {
		return (
			<div>
				Welcome to Spotifood
				<a href={SPOTIFY_LOGIN_URL}>
					Enter with spotify
				</a>
			</div>
		);
	}
}

export default Login;
