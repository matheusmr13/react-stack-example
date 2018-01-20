import React, { Component } from 'react';

class Login extends Component {
	state = {}
	render() { 
		return (
			<div>
				Welcome to Spotifood
				<button onClick={this.onLogin}>
					Enter with spotify
				</button>
			</div>
		)
	}
}
 
export default Login;