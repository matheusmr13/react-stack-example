import React, { Component } from 'react';

import SpotifyService from 'services/spotify/service';

import KeyboardSimulator from 'components/keyboard-simulator';

import LogoSpotify from 'images/spotify-white-logo.png';
import LogoIfood from 'images/ifood-white-logo.png';

import GithubIcon from 'images/github-icon.svg';
import LinkedinIcon from 'images/linkedin-icon.svg';

import './landing.css';

class Login extends Component {
	state = {}
	render() {
		return (
			<div className="landing">
				<section>
					<div className="fade" />
					<div className="content content--centralized">
						<div className="centralized">
							<div className="landing__logos">
								<a href="https://www.spotify.com/">
									<img src={LogoSpotify} alt="Spotify" />
								</a>
								<span>+</span>
								<a href="https://www.ifood.com.br/">
									<img src={LogoIfood} alt="IFood" />
								</a>
							</div>
							<div className="landing__disclaimer">
								<KeyboardSimulator
									text="Welcome to a new"
									values={[
										'Experience',
										'Thing',
										'Life'
									]}
								/>
							</div>
							<a
								className="landing__login"
								href={SpotifyService.getLoginUrl()}
							>
								Enter with Spotify
							</a>
						</div>
					</div>
				</section>
				<footer className="landing__footer">
					<div>
						Made by matheusmr13
					</div>
					<div>
						<a href="https://github.com/matheusmr13">
							<img src={GithubIcon} alt="matheusmr13" />
						</a>
						<a href="https://www.linkedin.com/in/matheus-martins-do-rego-9593a484/">
							<img src={LinkedinIcon} alt="Matheus Martins" />
						</a>
					</div>
				</footer>
			</div>
		);
	}
}

export default Login;
