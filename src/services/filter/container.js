import { connect } from 'react-redux';

import { Actions } from 'services/filter/module';
import FilterView from 'views/filter';

const mapStateToProps = state => ({
	possibleFilters: state.filter.possibleFilters,
	selectedFilters: state.filter.selectedFilters,
	loadingFilters: state.filter.loadingFilters
});

const mapDispatchToProps = dispatch => ({
	onFilterChange: filters => dispatch(Actions.onFilterChange(filters)),
	fetchFilters: () => dispatch(Actions.fetchFilters())
});

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(FilterView);

export default FilterContainer;
