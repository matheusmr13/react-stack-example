import React from 'react';
import { shallow } from 'enzyme';
import KeyboardSimulator from './index';

describe('KeyboardSimulator component', () => {
	it('should render properly', () => {
		const keyboardSimulator = shallow(<KeyboardSimulator text="Initial text" values={['first', 'second', 'third']} />);
		expect(keyboardSimulator).toMatchSnapshot();
	});
});
