import React, { Component } from 'react';
import PlaylistCard from './PlaylistCard';

class Playlists extends Component {
	state = {
		loading: true,
		playlists: []
	};

	componentDidMount() {
		const paramsString = window.location.hash.substring(1);
		const params = JSON.parse(`{"${paramsString.replace(/=/g, '":"').replace(/&/g, '","')}"}`);

		fetch('https://api.spotify.com/v1/me', {
			headers: {
				Authorization: `Bearer ${params.access_token}`
			}
		})
			.then(resp => resp.json())
			.then((user) => {
				fetch('https://api.spotify.com/v1/browse/featured-playlists', {
					headers: {
						Authorization: `Bearer ${params.access_token}`
					},
					qs: {

					}
				})
					.then(resp => resp.json())
					.then((result) => {
						console.info(result);
						this.setState({
							playlists: result.playlists.items,
							loading: false
						});
						return result;
					});
			});
	}

	render() {
		const { loading, playlists } = this.state;

		if (loading) {
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