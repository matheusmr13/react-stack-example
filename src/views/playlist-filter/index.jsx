import React, { Component } from 'react';

import EntityFilter from 'components/entity-filter';

class Filter extends Component {
	state = {
		selectedFilters: {}
	}

	componentDidMount() {
		this.props.fetchFilters();
	}

	render() {
		const { loadingFilters, selectedFilters, possibleFilters } = this.props;
		if (loadingFilters) {
			return 'Loading';
		}

		return (
			<div style={{ padding: '16px' }}>
				<EntityFilter
					filters={possibleFilters}
					values={selectedFilters}
					onChange={this.props.onFilterChange}
				/>
			</div>
		);
	}
}

export default Filter;
