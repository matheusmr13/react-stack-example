import React, { Component } from 'react';
import PlaylistsContainer from 'services/playlist/container';
import FilterContainer from 'services/playlist-filter/container';
import { AppBar, Drawer } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/navigation/close';
import Login from 'views/login';

import './App.css';


class App extends Component {
	state = {
		isFilterOpen: true
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
		console.info(loggedUser);
		const { isFilterOpen } = this.state;

		return (
			<div className={isFilterOpen ? 'filter-open' : null}>
				<AppBar
					title="Spotifood"
					showMenuIconButton={!isFilterOpen}
					iconClassNameRight="muidocs-icon-navigation-expand-more"
					onLeftIconButtonClick={this.onOpenAppBar}
				/>
				{
					loggedUser ? (
						<React.Fragment>
							<Drawer
								open={isFilterOpen}
							>
								<IconButton onClick={this.onCloseAppBar} >
									<StarBorder />
								</IconButton>
								<FilterContainer
									onCloseAppBar={this.onCloseAppBar}
								/>
							</Drawer>
							<PlaylistsContainer />
						</React.Fragment>
					) : <Login />
				}
			</div>
		);
	}
}

export default App;
