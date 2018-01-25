import SpotifyService from 'services/spotify/service';
import Service from 'services/config/service';

process.env.REACT_APP_SPOTIFY_URL = '';
jest.mock('services/config/redux', () => ({
	getState: () => ({ app: { loggedUser: { access_token: 'token' } } })
}));

Service.get = jest.fn(() => Promise.resolve());

describe('SpotifyService', () => {
	it('should fetch correct featured playlists endpoint', (done) => {
		expect.assertions(1);
		const filters = { filterOne: 'valueOne', filterTwo: 'valueTwo' };
		SpotifyService.fetchFeaturedPlaylists(filters).then(() => {
			expect(Service.get).toBeCalledWith('/browse/featured-playlists', {
				qp: filters,
				headers: {
					Authorization: 'Bearer token'
				}
			});
			done();
		});
	});
	it('should fetch correct user info endpoint', (done) => {
		expect.assertions(1);
		SpotifyService.fetchLoggedUserInfos().then(() => {
			expect(Service.get).toBeCalledWith('/me', {
				headers: {
					Authorization: 'Bearer token'
				}
			});
			done();
		});
	});
	it('should set correct login url', () => {
		process.env.REACT_APP_SPOTIFY_AUTH_URL = 'spotify';
		process.env.REACT_APP_SPOTIFY_CLIENT_ID = '123';
		expect(SpotifyService.getLoginUrl()).toEqual('spotify?client_id=123&response_type=token&redirect_uri=http://localhost/');
	});
});
