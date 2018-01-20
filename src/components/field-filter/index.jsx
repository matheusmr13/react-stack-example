import React, { Component } from 'react';

import ListFilter from './list-filter';
import DatetimeFilter from './datetime-filter';
import UnlimitedIntegerFilter from './unlimited-integer-filter';
import LimitedIntegerFilter from './limited-integer-filter';

import FilterService from 'services/filter/service';

class FieldFilter extends Component {
	state = {}

	onChange = (value) => {
		const { spec } = this.props;
		console.info(spec.id, value);
		this.props.onChange(spec.id, value);
		// const FilterService.validate)
	}

	render() {
		const { spec } = this.props;
		const {
			values,
			validation
		} = spec;

		if (values) {
			return <ListFilter spec={spec} onChange={this.onChange} />;
		}

		if (validation) {
			const {
				entityType,
				primitiveType,
				max,
				min
			} = validation;

			if (entityType === 'DATE_TIME') {
				return <DatetimeFilter spec={spec} onChange={this.onChange} />;
			}

			if (primitiveType === 'INTEGER' && typeof max !== 'undefined' && typeof min !== 'undefined') {
				return <LimitedIntegerFilter spec={spec} onChange={this.onChange} />;
			}

			if (primitiveType === 'INTEGER') {
				return <UnlimitedIntegerFilter spec={spec} onChange={this.onChange} />;
			}
		}

		return null;
	}
}
 
export default FieldFilter;