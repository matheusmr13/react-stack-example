import React from 'react';
import ListFilter from 'components/field-filter/list-filter';
import { shallow } from 'enzyme';

describe('ListFilter component', () => {
	it('should render properly', () => {
		const spec = {
			id: 'myId',
			name: 'List field',
			values: []
		};
		const listFilter = shallow(<ListFilter spec={spec} />);
		expect(listFilter).toMatchSnapshot();
	});
});
