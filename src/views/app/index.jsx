import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PlaylistsContainer from 'services/playlist/container';
import FilterContainer from 'services/playlist-filter/container';
import { AppBar, Drawer, Snackbar, IconButton } from 'material-ui';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import FilterListIcon from 'material-ui/svg-icons/content/filter-list';
import Landing from 'views/landing';

import LogoSpotify from 'images/spotify-green-logo.png';
import './app.css';

class App extends Component {
	state = {
		isFilterOpen: false,
		isShowingMessage: false
	}
	componentDidMount() {
		this.props.fetchLoggedUser();
	}
	componentWillReceiveProps(props) {
		if (!this.props.message ||
			(props.message && this.props.message.generatedAt !== props.message.generatedAt)) {
			this.setState({
				isShowingMessage: !!props.message
			});
		}
	}

	onCloseMessage = () => {
		this.setState({
			isShowingMessage: false
		});
	}

	onCloseAppBar = () => {
		this.setState({
			isFilterOpen: false
		});
	}

	onOpenAppBar = () => {
		this.setState({
			isFilterOpen: true
		});
	}

	render() {
		const { loggedUser, message } = this.props;
		const { isFilterOpen, isShowingMessage } = this.state;

		return (
			<div className={`app${isFilterOpen ? ' app--menu-open' : ''}`}>
				{ isShowingMessage ? <Snackbar
					open
					message={message.text}
					onRequestClose={this.onCloseMessage}
					autoHideDuration={4000}
				/> : null}
				<AppBar
					titleStyle={{ textAlign: 'center' }}
					title={
						<div className="app__header">
							<img src={LogoSpotify} alt="Spotifood" />
							<span>Spotifood</span>
						</div>
					}
					showMenuIconButton={!!loggedUser}
					iconElementLeft={<IconButton style={{ position: 'absolute' }}><FilterListIcon /></IconButton>}
					onLeftIconButtonClick={this.onOpenAppBar}
				/>
				{
					loggedUser ? (
						<React.Fragment>
							<Drawer
								open={isFilterOpen}
							>
								<IconButton onClick={this.onCloseAppBar}>
									<CloseIcon />
								</IconButton>
								<FilterContainer
									onCloseAppBar={this.onCloseAppBar}
								/>
							</Drawer>
							<PlaylistsContainer
								loggedUser={loggedUser}
							/>
						</React.Fragment>
					) : <Landing />
				}
			</div>
		);
	}
}

App.defaultProps = {
	loggedUser: null,
	message: null
};

App.propTypes = {
	fetchLoggedUser: PropTypes.func.isRequired,
	message: PropTypes.shape({
		text: PropTypes.string.isRequired,
		generatedAt: PropTypes.number.isRequired
	}),
	loggedUser: PropTypes.shape({
		access_token: PropTypes.string.isRequired
	})
};

export default App;
