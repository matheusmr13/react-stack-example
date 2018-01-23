import React from 'react';
import { shallow } from 'enzyme';
import Landing from 'views/landing';

describe('Landing component', () => {
	it('should render properly', () => {
		const landing = shallow(<Landing />);
		expect(landing).toMatchSnapshot();
	});
});
