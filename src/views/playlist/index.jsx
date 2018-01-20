import React, { Component } from 'react';
import PlaylistCard from './PlaylistCard';

class Playlists extends Component {
	componentDidMount() {
		this.props.fetchInitialPlaylists();
	}

	render() {
		const { loadingPlaylists, playlists } = this.props;
		if (loadingPlaylists) {
			return 'Loading';
		}
		return (
			<div>
				{
					playlists.map(playlist => <PlaylistCard key={playlist.id} playlist={playlist} />)
				}
			</div>
		);
	}
}

export default Playlists;