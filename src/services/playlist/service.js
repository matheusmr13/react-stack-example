import SpotifyService from 'services/spotify/service';

const PlaylistService = {
	filterPlaylists(filters) {
		return SpotifyService
			.fetchFeaturedPlaylists(filters);
	}
};

export default PlaylistService;
