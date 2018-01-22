import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PlaylistsContainer from 'services/playlist/container';
import FilterContainer from 'services/playlist-filter/container';
import { AppBar, Drawer } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import FilterListIcon from 'material-ui/svg-icons/content/filter-list';
import Login from 'views/login';

import './app.css';

class App extends Component {
	state = {
		isFilterOpen: false
	}
	componentDidMount() {
		this.props.fetchLoggedUser();
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
		const { loggedUser } = this.props;
		const { isFilterOpen } = this.state;

		return (
			<div className={`app${isFilterOpen ? ' app--menu-open' : ''}`}>
				<AppBar
					titleStyle={{ textAlign: 'center' }}
					title="Spotifood"
					showMenuIconButton={loggedUser && !isFilterOpen}
					iconElementLeft={<IconButton><FilterListIcon /></IconButton>}
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
					) : <Login />
				}
			</div>
		);
	}
}

App.defaultProps = {
	loggedUser: null
};

App.propTypes = {
	fetchLoggedUser: PropTypes.func.isRequired,
	loggedUser: PropTypes.shape({
		access_token: PropTypes.string.isRequired
	})
};

export default App;
