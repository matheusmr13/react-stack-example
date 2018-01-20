import React, { Component } from 'react';

import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import moment from 'moment';

class DatetimeFilter extends Component {
	state = {
		date: moment(),
		time: moment()
	};

	onChange(type, value) {
		const { onChange, spec } = this.props;
		const m = moment(new Date(value));
		this.setState({
			[type]: m
		}, () => {
			const { date, time } = this.state;
			const result = moment().startOf('day');

			result.set('year', date.year());
			result.set('month', date.month());
			result.set('date', date.date());

			result.set('minute', time.get('minute'));
			result.set('hour', time.get('hour'));

			onChange(result.format(spec.format));
		});
	}

	render() {
		const { spec } = this.props;
		return (
			<div>
				<DatePicker hintText={spec.name} onChange={(e, value) => this.onChange('date', value)} />
				<TimePicker hintText={spec.name} onChange={(e, value) => this.onChange('time', value)} />
			</div>
		);
	}
}

export default DatetimeFilter;
