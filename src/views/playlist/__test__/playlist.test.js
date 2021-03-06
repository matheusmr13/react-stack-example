import React from 'react';
import { shallow } from 'enzyme';
import PlaylistList from 'views/playlist';
import PlaylistCard from 'views/playlist/card';

const playlist = {
	external_urls: {
		spotify: 'mylink'
	},
	id: '6ftJBzU2LLQcaKefMi7ee7',
	images: [{
		url: 'myotherlink'
	}],
	name: 'my playlist',
	owner: {
		external_urls: {
			spotify: 'owner link'
		},
		id: 'ownerid'
	}
};
const playlists = [{ ...playlist }, {
	...playlist,
	name: 'dif name'
}];

const featured = {
	message: 'myMessage',
	playlists: {
		items: playlists
	}
};

describe('Playlist component', () => {
	const fetchInitialPlaylists = jest.fn();
	const playlistList = shallow(<PlaylistList
		playlists={null}
		fetchInitialPlaylists={fetchInitialPlaylists}
		onLogout={() => {}}
		loadingPlaylists
	/>);
	it('should render loading properly', () => {
		expect(playlistList).toMatchSnapshot();
	});
	it('should render list properly', () => {
		playlistList.setProps({
			playlists: featured,
			fetchInitialPlaylists,
			loadingPlaylists: false
		});
		playlistList.setProps({
			playlists: featured,
			fetchInitialPlaylists,
			loadingPlaylists: false
		});
		expect((playlistList).find(PlaylistCard)).toHaveLength(2);
		expect(fetchInitialPlaylists).toHaveBeenCalled();
		expect(playlistList).toMatchSnapshot();
	});
	it('should filter playlists by name matching one playlist', () => {
		playlistList.instance().onFilterByName({}, 'my');
		expect(playlistList.instance().state.filteredPlaylists).toHaveLength(1);
	});
	it('should filter playlists by name matching no playlist', () => {
		playlistList.instance().onFilterByName({}, 'myCrazyNamePlaylist');
		expect(playlistList.instance().state.filteredPlaylists).toHaveLength(0);
	});
});
