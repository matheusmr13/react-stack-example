import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterPropType from 'services/playlist-filter/proptype';

import EntityFilter from 'components/entity-filter';

class Filter extends Component {
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

Filter.propTypes = {
	onFilterChange: PropTypes.func.isRequired,
	fetchFilters: PropTypes.func.isRequired,
	loadingFilters: PropTypes.bool.isRequired,
	selectedFilters: PropTypes.shape({}).isRequired,
	possibleFilters: PropTypes.arrayOf(PropTypes.shape(FilterPropType)).isRequired
};

export default Filter;
