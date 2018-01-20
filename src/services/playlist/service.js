import AppService from 'services/app/service';

const PlaylistService = {
	filterPlaylists() {
		return fetch('https://api.spotify.com/v1/browse/featured-playlists', {
			headers: {
				Authorization: `Bearer ${AppService.getLoggedUser().access_token}`
			},
			qs: {

			}
		})
			.then(resp => resp.json())
			.then(json => json.playlists.items );
	}
};

export default PlaylistService;