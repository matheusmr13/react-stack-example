import React, { Component } from 'react';

import FieldFilter from 'components/field-filter';
import PropTypes from 'prop-types';
import { FilterPropType } from 'services/playlist-filter/proptype';

class EntityFilter extends Component {
	state = {
		filters: {}
	}

	onChange = (field, value) => {
		const { filters } = this.state;
		filters[field] = value;
		this.setState({
			filters
		});
		this.props.onChange(filters);
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

EntityFilter.propTypes = {
	onChange: PropTypes.func.isRequired,
	filters: PropTypes.arrayOf(PropTypes.shape(FilterPropType)).isRequired
};

export default EntityFilter;
