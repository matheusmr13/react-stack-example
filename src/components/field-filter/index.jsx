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
		this.props.onChange(spec.id, value);
		// const FilterService.validate)
	}

	getComponentToRender() {
		const { spec } = this.props;
		const {
			values,
			validation
		} = spec;

		if (values) {
			return ListFilter;
		}

		if (validation) {
			const {
				entityType,
				primitiveType,
				max,
				min
			} = validation;

			if (entityType === 'DATE_TIME') {
				return DatetimeFilter;
			}

			if (primitiveType === 'INTEGER' && typeof max !== 'undefined' && typeof min !== 'undefined') {
				return LimitedIntegerFilter;
			}

			if (primitiveType === 'INTEGER') {
				return UnlimitedIntegerFilter;
			}
		}

		return null;
	}

	render() {
		const { spec } = this.props;
		const ComponentToRender = this.getComponentToRender();
		if (!ComponentToRender) {
			return null;
		}

		return <ComponentToRender spec={spec} onChange={this.onChange} />;
	}
}

export default FieldFilter;
