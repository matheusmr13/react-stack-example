import SagaTester from 'redux-saga-tester';
import { Actions } from 'services/playlist/module';
import PlaylistSaga from 'services/playlist/saga';
import { reducers } from 'services/config/redux';

jest.mock('services/spotify/service', () => ({
	fetchFeaturedPlaylists: () => Promise.resolve({ playlists: { items: Array(5).fill({}) } })
}));

describe('PlaylistSaga', () => {
	let sagaTester = null;

	beforeEach(() => {
		sagaTester = new SagaTester({
			initialState: {},
			reducers
		});
		sagaTester.start(PlaylistSaga);
	});

	it('should filter playlists', async () => {
		sagaTester.dispatch(Actions.filterPlaylists());
		await sagaTester.waitFor(Actions.setPlaylistList.toString());

		const lastAction = sagaTester.getLatestCalledAction();
		expect(lastAction.payload).toHaveLength(5);
	});
});
