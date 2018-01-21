import React from 'react';
import DatetimeFilter from 'components/field-filter/datetime-filter';
import { shallow } from 'enzyme';
import moment from 'moment';

describe('DatetimeFilter component', () => {
	it('should render properly', () => {
		const datetimeFilter = shallow(<DatetimeFilter spec={{ id: 'date', name: 'Date field' }} />);
		expect(datetimeFilter).toMatchSnapshot();
	});
	it('should merge date and time', () => {
		let lastChangedDate;

		const onChange = (value) => {
			lastChangedDate = value;
		};
		const datetimeFilter = shallow(<DatetimeFilter spec={{ id: 'date', name: 'Date field' }} onChange={onChange} />);
		expect(lastChangedDate).toBeUndefined();

		const dateMoment = moment({
			years: 2018,
			month: 10,
			date: 15
		});
		const hourMoment = moment({
			minutes: 40,
			hours: 10
		});
		datetimeFilter.instance().onChange('date', dateMoment.toDate());
		datetimeFilter.instance().onChange('time', hourMoment.toDate());

		expect(lastChangedDate).not.toBeUndefined();
		expect(lastChangedDate).toBe('2018-11-15T10:40:00-02:00');
	});
});
