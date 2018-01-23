import React from 'react';
import { render, shallow } from 'enzyme';
import UserInfo from './index';

const user = {
	info: {
		display_name: 'My User',
		external_urls: {
			spotify: 'spotifyurl'
		},
		followers: {
			total: 65
		},
		href: 'userurl',
		images: [{
			url: 'userimageurl'
		}]
	}
};

describe('UserInfo component', () => {
	it('should render properly without user', () => {
		const entityFilter = render(<UserInfo onLogout={() => {}} />);
		expect(entityFilter).toMatchSnapshot();
	});
	it('should render properly with user', () => {
		const entityFilter = render(<UserInfo user={user} onLogout={() => {}} />);
		expect(entityFilter).toMatchSnapshot();
	});
	it('should logout user if button clicked', () => {
		const onLogout = jest.fn();
		const entityFilter = shallow(<UserInfo user={user} onLogout={onLogout} />);
		entityFilter.find('button').simulate('click');
		expect(onLogout).toHaveBeenCalled();
	});
});
