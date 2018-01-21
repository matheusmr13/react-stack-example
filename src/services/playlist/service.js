import Store from 'services/config/redux';

const PlaylistService = {
	filterPlaylists(filters) {
		const query = Object.keys(filters)
			.map(k => `${encodeURIComponent(k)}=${encodeURIComponent(filters[k])}`)
			.join('&');
		return fetch(`https://api.spotify.com/v1/browse/featured-playlists?${query}`, {
			headers: {
				Authorization: `Bearer ${Store.getState().app.loggedUser.access_token}`
			}
		})
			.then(resp => resp.json())
			.then(json => json.playlists.items);
	}
};

export default PlaylistService;
