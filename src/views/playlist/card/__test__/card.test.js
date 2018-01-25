import React from 'react';
import { shallow } from 'enzyme';
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

describe('PlaylistCard component', () => {
	it('should render properly before image load', () => {
		const playlistCard = shallow(<PlaylistCard playlist={playlist} />);
		expect(playlistCard).toMatchSnapshot();
	});
	it('should render properly after image load', () => {
		const playlistCard = shallow(<PlaylistCard playlist={playlist} />);
		playlistCard.instance().onImageLoad();
		expect(playlistCard).toMatchSnapshot();
	});
});
