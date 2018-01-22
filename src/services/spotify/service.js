import Store from 'services/config/redux';

const paramsToUrl = filters => Object.keys(filters)
	.map(k => `${encodeURIComponent(k)}=${encodeURIComponent(filters[k])}`)
	.join('&');

class SpotifyService {
	static fetch(url, options) {
		return fetch(`${process.env.REACT_APP_SPOTIFY_URL}${url}`, Object.assign({}, options, {
			headers: {
				Authorization: `Bearer ${Store.getState().app.loggedUser.access_token}`
			}
		})).then(response => response.json());
	}

	static fetchFeaturedPlaylists(filters) {
		return this.fetch(`/browse/featured-playlists?${paramsToUrl(filters)}`)
	}

	static fetchLoggedUserInfos() {
		return this.fetch('/me');
	}
};

export default SpotifyService;
