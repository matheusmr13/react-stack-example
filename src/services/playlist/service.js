import SpotifyService from 'services/spotify/service';

const PlaylistService = {
	filterPlaylists(filters) {
		return SpotifyService
			.fetchFeaturedPlaylists(filters)
			.then(json => json.playlists.items);
	}
};

export default PlaylistService;
