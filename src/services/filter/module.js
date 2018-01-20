import { createActions, handleActions } from 'redux-actions';

const initialState = {
	loadingFilters: true,
	possibleFilters: null,
	selectedFilters: null
};

export const Actions = createActions({
	SET_POSSIBLE_FILTERS: filters => filters,
	SET_SELECTED_FILTERS: filters => filters,
	FETCH_FILTERS: () => {}
});

const reducer = handleActions({
	[Actions.setPossibleFilters]: (state, { payload: possibleFilters }) => ({
		...state,
		possibleFilters,
		loadingFilters: false
	}),
	[Actions.setSelectedFilters]: (state, { payload: selectedFilters }) => ({
		...state,
		selectedFilters
	}),
	[Actions.fetchFilters]: state => ({
		...state,
		loadingFilters: true
	})
}, initialState);

export default reducer;
