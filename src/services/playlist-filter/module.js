import { createActions, handleActions } from 'redux-actions';
import moment from 'moment';

const initialState = {
	loadingFilters: true,
	possibleFilters: [],
	selectedFilters: {},
	lastUpdated: null
};

export const Actions = createActions({
	SET_POSSIBLE_FILTERS: filters => filters,
	ON_FILTER_CHANGE: filters => filters,
	FETCH_FILTERS: () => {}
});

const reducer = handleActions({
	[Actions.setPossibleFilters]: (state, { payload: possibleFilters }) => ({
		...state,
		possibleFilters,
		loadingFilters: false
	}),
	[Actions.onFilterChange]: (state, { payload: filters }) => ({
		...state,
		selectedFilters: filters,
		lastUpdated: moment()
	}),
	[Actions.fetchFilters]: state => ({
		...state,
		loadingFilters: true
	})
}, initialState);

export default reducer;
