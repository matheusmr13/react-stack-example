import React from 'react';
import LimitedIntegerFilter from 'components/field-filter/limited-integer-filter';
import { shallow } from 'enzyme';

describe('LimitedIntegerFilter component', () => {
	it('should render properly', () => {
		const spec = {
			id: 'myId',
			name: 'Limited integer field',
			validation: {
				min: 0,
				max: 10
			}
		};
		const limitedIntegerFilter = shallow(<LimitedIntegerFilter spec={spec} />);
		expect(limitedIntegerFilter).toMatchSnapshot();
	});
});
