import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlaylistPropType from 'services/playlist/proptype';

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
			filteredPlaylists: playlists
				.filter(playlist => playlist.name
					.toLowerCase()
					.indexOf(nameFilter.toLowerCase()) > -1)
		});
	}

	render() {
		const { loadingPlaylists } = this.props;
		const { nameFilter, filteredPlaylists } = this.state;

		if (loadingPlaylists) {
			return 'Loading';
		}
		return (
			<div className="playlists">
				<div className="playlists__title">
					ASD
				</div>
				<div className="playlists__filter">
					<TextField
						hintText="Filter..."
						onChange={this.onFilterByName}
						value={nameFilter}
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
		);
	}
}

Playlists.propTypes = {
	fetchInitialPlaylists: PropTypes.func.isRequired,
	loadingPlaylists: PropTypes.bool.isRequired,
	playlists: PropTypes.arrayOf(PropTypes.shape(PlaylistPropType)).isRequired
};

export default Playlists;
