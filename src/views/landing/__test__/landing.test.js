import React from 'react';
import { shallow } from 'enzyme';
import Landing from 'views/landing';

describe('Landing component', () => {
	process.env.REACT_APP_SPOTIFY_AUTH_URL = 'spotify';
	process.env.REACT_APP_SPOTIFY_CLIENT_ID = '123';
	it('should render properly', () => {
		const landing = shallow(<Landing />);
		expect(landing).toMatchSnapshot();
	});
});
