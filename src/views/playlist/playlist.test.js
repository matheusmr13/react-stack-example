import React from 'react';
import { shallow } from 'enzyme';
import PlaylistList from './index';
import PlaylistCard from './card';

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

describe('PlaylistCard component', () => {
	const fetchInitialPlaylists = jest.fn();
	const playlistList = shallow(<PlaylistList
		playlists={[]}
		fetchInitialPlaylists={fetchInitialPlaylists}
		loadingPlaylists
	/>);
	it('should render loading properly', () => {
		expect(playlistList).toMatchSnapshot();
	});
	it('should render list properly', () => {
		playlistList.setProps({
			playlists,
			fetchInitialPlaylists,
			loadingPlaylists: false
		});
		expect((playlistList).find(PlaylistCard)).toHaveLength(2);
		expect(fetchInitialPlaylists).toHaveBeenCalled();
		expect(playlistList).toMatchSnapshot();
	});
	it('should filter playlists by name', () => {
		playlistList.instance().onFilterByName({}, 'my');
		expect(playlistList.instance().state.filteredPlaylists).toHaveLength(1);
	});
});
