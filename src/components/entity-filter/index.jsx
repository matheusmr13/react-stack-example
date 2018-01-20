import React, { Component } from 'react';

import FieldFilter from 'components/field-filter';

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
		return filters.map(filter => (
			<FieldFilter
				key={filter.id}
				spec={filter}
				onChange={this.onChange}
			/>
		));
	}
}
 
export default EntityFilter;