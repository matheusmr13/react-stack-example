import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlaylistPropType from 'services/playlist/proptype';

import UserInfo from 'components/user-info';

import TextField from 'material-ui/TextField';

import PlaylistCard from './card';

import './playlist.css';

class Playlists extends Component {
	state = {
		nameFilter: '',
		filteredPlaylists: []
	}

	componentDidMount() {
		this.props.fetchInitialPlaylists();
	}

	componentWillReceiveProps(props) {
		if (props.playlists !== this.props.playlists) {
			this.filterPlaylists(props.playlists);
		}
	}

	onFilterByName = (e, nameFilter) => {
		this.setState({
			nameFilter
		}, () => {
			this.filterPlaylists(this.props.playlists);
		});
	}

	filterPlaylists(playlists) {
		const { nameFilter } = this.state;
		this.setState({
			filteredPlaylists: playlists.playlists.items
				.filter(playlist => playlist.name
					.toLowerCase()
					.indexOf(nameFilter.toLowerCase()) > -1)
		});
	}

	render() {
		const { loadingPlaylists, playlists, loggedUser } = this.props;
		const { nameFilter, filteredPlaylists } = this.state;

		if (loadingPlaylists) {
			return 'Loading';
		}
		return (
			<div className="playlists">
				<div className="playlists__content">
					<div className="playlists__header">
						<div className="playlists__message">{playlists.message}</div>
						<UserInfo user={loggedUser} onLogout={this.props.onLogout} />
					</div>
					<div className="playlists__filter">
						<TextField
							hintText="Filter"
							onChange={this.onFilterByName}
							value={nameFilter}
							fullWidth
						/>
					</div>
					<div className="playlists__list-container">
						<div className="playlists__list">
							{
								filteredPlaylists
									.map(playlist => (
										<PlaylistCard
											key={playlist.id}
											playlist={playlist}
										/>
									))
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Playlists.defaultProps = {
	playlists: {},
	loggedUser: null
};

Playlists.propTypes = {
	loggedUser: PropTypes.shape({
		info: PropTypes.shape({
			display_name: PropTypes.string
		})
	}),
	fetchInitialPlaylists: PropTypes.func.isRequired,
	onLogout: PropTypes.func.isRequired,
	loadingPlaylists: PropTypes.bool.isRequired,
	playlists: PropTypes.shape({
		message: PropTypes.string.isRequired,
		playlists: PropTypes.shape({
			items: PropTypes.arrayOf(PropTypes.shape(PlaylistPropType)).isRequired
		}).isRequired
	})
};

export default Playlists;
