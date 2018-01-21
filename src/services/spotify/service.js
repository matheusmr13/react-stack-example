import Store from 'services/config/redux';

const paramsToUrl = filters => Object.keys(filters)
	.map(k => `${encodeURIComponent(k)}=${encodeURIComponent(filters[k])}`)
	.join('&');

class SpotifyService {
	static fetch(url, options) {
		return fetch(url, Object.assign({}, options, {
			headers: {
				Authorization: `Bearer ${Store.getState().app.loggedUser.access_token}`
			}
		})).then(response => response.json());
	}

	static fetchFeaturedPlaylists(filters) {
		return this.fetch(`https://api.spotify.com/v1/browse/featured-playlists?${paramsToUrl(filters)}`)
	}

	static fetchLoggedUserInfos() {
		return this.fetch('https://api.spotify.com/v1/me');
	}
};

export default SpotifyService;
