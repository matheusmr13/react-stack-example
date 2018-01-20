import React, { Component } from 'react';
import PlaylistCard from './PlaylistCard';

class Playlists extends Component {
	componentDidMount() {
		this.props.filterPlaylists();
	}

	render() {
		const { loadingPlaylists, playlists } = this.props;
		console.info(this.props);
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