import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

import PlaylistCard from './PlaylistCard';


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
			filteredPlaylists: playlists.filter(playlist => playlist.name.toLowerCase().indexOf(nameFilter.toLowerCase()) > -1)
		});
	}

	render() {
		const { loadingPlaylists } = this.props;
		const { nameFilter, filteredPlaylists } = this.state;

		if (loadingPlaylists) {
			return 'Loading';
		}
		return (
			<div>
				<div>
					<TextField
						hintText="Filter..."
						onChange={this.onFilterByName}
						value={nameFilter}
					/>
				</div>
				<div>
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
		);
	}
}

export default Playlists;