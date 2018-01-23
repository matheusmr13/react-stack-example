import React from 'react';
import { shallow } from 'enzyme';
import KeyboardSimulator from './index';

describe('KeyboardSimulator component', () => {
	it('should render properly', () => {
		const keyboardSimulator = shallow(<KeyboardSimulator />);
		expect(keyboardSimulator).toMatchSnapshot();
	});
});
