import React from 'react';
import UnlimitedIntegerFilter from 'components/field-filter/unlimited-integer-filter';
import { shallow } from 'enzyme';

const spec = {
	id: 'myId',
	name: 'Unimited integer field'
};
describe('UnlimitedIntegerFilter component', () => {
	it('should render initial state properly', () => {
		const unlimitedIntegerFilter = shallow(<UnlimitedIntegerFilter
			spec={spec}
			onChange={() => {}}
		/>);
		expect(unlimitedIntegerFilter.find('button')).toHaveLength(1);
		expect(unlimitedIntegerFilter).toMatchSnapshot();
	});
	it('should render properly after up click', () => {
		const unlimitedIntegerFilter = shallow(<UnlimitedIntegerFilter
			spec={spec}
			onChange={() => {}}
		/>);

		unlimitedIntegerFilter.find('button').simulate('click');
		expect(unlimitedIntegerFilter.find('button')).toHaveLength(2);
		expect(unlimitedIntegerFilter).toMatchSnapshot();
	});
	it('should render properly after up and down click', () => {
		const unlimitedIntegerFilter = shallow(<UnlimitedIntegerFilter
			spec={spec}
			onChange={() => {}}
		/>);

		unlimitedIntegerFilter.find('button').simulate('click');
		unlimitedIntegerFilter.find('button').first().simulate('click');
		expect(unlimitedIntegerFilter.find('button')).toHaveLength(1);
		expect(unlimitedIntegerFilter).toMatchSnapshot();
	});
});
