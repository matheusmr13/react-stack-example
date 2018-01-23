import SpotifyService from 'services/spotify/service';

const PlaylistService = {
	filterPlaylists(filters) {
		return new Promise((resolve, reject) => {
			SpotifyService
				.fetchFeaturedPlaylists(filters)
				.then((data) => {
					if (data.error) {
						reject(data.error);
					}
					resolve(data);
				});
		});
	}
};

export default PlaylistService;
