import React, { Component } from 'react';

import FieldFilter from 'components/field-filter';
import PropTypes from 'prop-types';
import FilterPropType from 'services/playlist-filter/proptype';

class EntityFilter extends Component {
	state = {
		filters: {}
	}

	onChange = (field, value) => {
		const { filters } = { ...this.state };
		const { onChange } = this.props;

		if (value) {
			filters[field] = value;
		} else {
			delete filters[field];
		}
		this.setState({
			filters
		});
		onChange(filters);
	}

	render() {
		const { filters } = this.props;
		return (
			<div>
				{
					filters.map(filter => (
						<FieldFilter
							key={filter.id}
							spec={filter}
							onChange={this.onChange}
						/>
					))
				}
			</div>
		);
	}
}

EntityFilter.defaultProps = {
	onChange: () => {}
};

EntityFilter.propTypes = {
	onChange: PropTypes.func,
	filters: PropTypes.arrayOf(PropTypes.shape(FilterPropType)).isRequired
};

export default EntityFilter;
