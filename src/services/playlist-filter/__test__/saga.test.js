import SagaTester from 'redux-saga-tester';
import { Actions } from 'services/playlist-filter/module';
import { Actions as PlaylistActions } from 'services/playlist/module';
import PlaylistFilterSaga from 'services/playlist-filter/saga';
import PlaylistFilterService from 'services/playlist-filter/service';
import { reducers } from 'services/config/redux';

PlaylistFilterService.fetchFilters = jest.fn(() => Array(2).fill({}));
jest.mock('services/spotify/service', () => ({
	fetchFeaturedPlaylists: () => Promise.resolve({ playlists: { items: Array(5).fill({}) } })
}));

describe('PlaylistFilterSaga', () => {
	let sagaTester = null;

	beforeEach(() => {
		sagaTester = new SagaTester({
			initialState: {},
			reducers
		});
		sagaTester.start(PlaylistFilterSaga);
	});

	it('should fetch possible filters', async () => {
		sagaTester.dispatch(Actions.fetchFilters());
		await sagaTester.waitFor(Actions.setPossibleFilters.toString());

		const lastAction = sagaTester.getLatestCalledAction();
		expect(lastAction.payload).toHaveLength(2);
		expect(PlaylistFilterService.fetchFilters).toHaveBeenCalled();
	});

	it('should change playlist filter when filter changed', async () => {
		sagaTester.dispatch(Actions.onFilterChange());
		await sagaTester.waitFor(PlaylistActions.filterPlaylists.toString());

		const lastAction = sagaTester.getLatestCalledAction();
		expect(lastAction.payload).toBeFalsy();
	});
});
