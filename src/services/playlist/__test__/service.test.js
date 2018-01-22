import PlaylistService from 'services/playlist/service';
import SpotifyService from 'services/spotify/service';

describe('PlaylistService', () => {
	const featuredPlaylists = {
		message: 'myMessage',
		playlists: {
			items: Array(5).fill({ name: 'my playlist' })
		}
	};
	SpotifyService.fetchFeaturedPlaylists = jest.fn(() => Promise.resolve(featuredPlaylists));
	it('should get playlists from spotify service', (done) => {
		const filter = {
			limit: 5,
			offset: 10
		};
		expect.assertions(1);
		PlaylistService.filterPlaylists(filter).then((playlists) => {
			expect(playlists).toEqual(featuredPlaylists);
			done();
		});
	});
});
