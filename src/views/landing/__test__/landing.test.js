import React from 'react';
import { render } from 'enzyme';
import Landing from 'views/landing';

describe('Landing component', () => {
	it('should render properly', () => {
		const landing = render(<Landing />);
		expect(landing).toMatchSnapshot();
	});
});
