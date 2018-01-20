import React, { Component } from 'react';

class Login extends Component {
	state = {}
	render() {
		return (
			<div>
				Welcome to Spotifood
				<a href={`https://accounts.spotify.com/authorize?client_id=a94d7c3f7ae64cd4a78bd9b7b02c08d9&response_type=token&redirect_uri=${window.location.href}&state=123`}>
					Enter with spotify
				</a>
			</div>
		);
	}
}
 
export default Login;