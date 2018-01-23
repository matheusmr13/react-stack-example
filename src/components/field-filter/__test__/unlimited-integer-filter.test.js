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
		expect(unlimitedIntegerFilter.find('button[disabled]')).toHaveLength(1);
		expect(unlimitedIntegerFilter).toMatchSnapshot();
	});
	it('should render properly after up click', () => {
		const onChange = jest.fn();
		const unlimitedIntegerFilter = shallow(<UnlimitedIntegerFilter
			spec={spec}
			onChange={onChange}
		/>);

		unlimitedIntegerFilter.find('button').last().simulate('click');
		expect(onChange).toHaveBeenCalled();
		expect(unlimitedIntegerFilter.find('button[disabled=false]')).toHaveLength(1);
		expect(unlimitedIntegerFilter.find('button[disabled]')).toHaveLength(1);
	});
	it('should render properly after up and down click', () => {
		const onChange = jest.fn();
		const unlimitedIntegerFilter = shallow(<UnlimitedIntegerFilter
			spec={spec}
			onChange={onChange}
		/>);

		unlimitedIntegerFilter.find('button').last().simulate('click');
		unlimitedIntegerFilter.find('button').first().simulate('click');
		expect(onChange).toHaveBeenCalledTimes(2);
		expect(unlimitedIntegerFilter.find('button[disabled]')).toHaveLength(1);
	});
});
