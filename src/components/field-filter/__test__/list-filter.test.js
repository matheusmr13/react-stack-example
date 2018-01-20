import React from 'react';
import UnlimitedIntegerFilter from 'components/field-filter/unlimited-integer-filter';
import { shallow } from 'enzyme';

describe('UnlimitedIntegerFilter component', () => {
	it('should render properly', () => {
		const spec = {
			name: 'Unimited integer field'
		};
		const unlimitedIntegerFilter = shallow(<UnlimitedIntegerFilter spec={spec} />);
		expect(unlimitedIntegerFilter).toMatchSnapshot();
	});
});
