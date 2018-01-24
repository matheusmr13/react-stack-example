import React from 'react';
import { shallow } from 'enzyme';
import PlaylistCardShimmer from 'views/playlist/card/shimmer';

describe('PlaylistCardShimmer component', () => {
	it('should render properly', () => {
		const playlistCard = shallow(<PlaylistCardShimmer />);
		expect(playlistCard).toMatchSnapshot();
	});
});
