import React from 'react';
import { render } from 'enzyme';
import Login from 'views/login';

describe('Login component', () => {
	it('should render properly', () => {
		const login = render(<Login />);
		expect(login).toMatchSnapshot();
	});
});
