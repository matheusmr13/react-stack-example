import Store from 'services/config/redux';
import BaseService from 'services/config/base-service';

class SpotifyService extends BaseService {
	static fetch(url, options) {
		return BaseService.get(`${process.env.REACT_APP_SPOTIFY_URL}${url}`, Object.assign({}, options, {
			headers: {
				Authorization: `Bearer ${Store.getState().app.loggedUser.access_token}`
			}
		}));
	}

	static fetchFeaturedPlaylists(filters) {
		return this.fetch('/browse/featured-playlists', {
			qp: filters
		});
	}

	static fetchLoggedUserInfos() {
		return this.fetch('/me');
	}
};

export default SpotifyService;
