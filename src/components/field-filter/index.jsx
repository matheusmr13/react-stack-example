import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterPropType from 'services/playlist-filter/proptype';

import ListFilter from './list-filter';
import DatetimeFilter from './datetime-filter';
import UnlimitedIntegerFilter from './unlimited-integer-filter';
import LimitedIntegerFilter from './limited-integer-filter';

class FieldFilter extends Component {
	state = {}


	onChange = (value) => {
		const { spec, onChange } = this.props;
		onChange(spec.id, value);
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

FieldFilter.defaultProps = {
	onChange: () => {}
};

FieldFilter.propTypes = {
	onChange: PropTypes.func,
	spec: PropTypes.shape(FilterPropType).isRequired
};

export default FieldFilter;
