import React from 'react';
import { shallow } from 'enzyme';
import { PlaylistsShimmer, PlaylistNameShimmer } from 'views/playlist/shimmer';
import PlaylistCardShimmer from 'views/playlist/card/shimmer';

describe('PlaylistsShimmer component', () => {
	it('should render list shimmer properly', () => {
		const playlist = shallow(<PlaylistsShimmer />);
		expect(playlist.find(PlaylistCardShimmer)).toHaveLength(4);
		expect(playlist).toMatchSnapshot();
	});
	it('should render name shimmer properly', () => {
		const playlistName = shallow(<PlaylistNameShimmer />);
		expect(playlistName).toMatchSnapshot();
	});
});
