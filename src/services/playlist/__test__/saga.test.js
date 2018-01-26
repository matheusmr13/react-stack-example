import SagaTester from 'redux-saga-tester';
import { Actions } from 'services/playlist/module';
import { Actions as AppActions } from 'services/app/module';
import PlaylistService from 'services/playlist/service';
import PlaylistSaga from 'services/playlist/saga';
import { reducers } from 'services/config/redux';
import moment from 'moment';

jest.mock('services/spotify/service', () => ({
	fetchFeaturedPlaylists: () => Promise.resolve({ message: 'my featured', playlists: { items: Array(5).fill({}) } })
}));

describe('PlaylistSaga', () => {
	let sagaTester = null;

	beforeEach(() => {
		delete process.env.REACT_APP_REFRESH_TIME_PLAYLISTS_SECONDS;
		sagaTester = new SagaTester({
			initialState: {
				filter: {
					lastUpdated: moment()
				}
			},
			reducers
		});
		let calls = 0;
		moment.prototype.diff = () => {
			calls += 1;
			return [
				() => {
					process.env.REACT_APP_REFRESH_TIME_PLAYLISTS_SECONDS = 0;
					return 3;
				},
				() => {
					delete process.env.REACT_APP_REFRESH_TIME_PLAYLISTS_SECONDS;
					return 10;
				},
				() => 3
			][calls - 1]();
		};
		sagaTester.start(PlaylistSaga);
	});

	it('should filter playlists', async () => {
		sagaTester.dispatch(Actions.filterPlaylists());
		const setPlaylistAction = await sagaTester.waitFor(Actions.setPlaylistList.toString());
		expect(setPlaylistAction.payload).toEqual({ message: 'my featured', playlists: { items: Array(5).fill({}) } });

		const onScheduleRefresh = await sagaTester.waitFor(Actions.onScheduleRefresh.toString());
		expect(onScheduleRefresh).toBeDefined();
	});
	it('should schedule playlist refresh', async () => {
		sagaTester.dispatch(Actions.onScheduleRefresh());

		const filterPlaylists = await sagaTester.waitFor(Actions.filterPlaylists.toString());

		expect(filterPlaylists.payload).toBeUndefined();
	});
	it('should skip schedule playlist refresh', async () => {
		sagaTester.dispatch(Actions.onScheduleRefresh());
		await sagaTester.waitFor(Actions.filterPlaylists.toString());

		expect(sagaTester.calledActions[0].type).toEqual(Actions.onScheduleRefresh.toString());
		expect(sagaTester.calledActions[1].type).toEqual(Actions.onScheduleRefresh.toString());
	});
	it('should delay if env set', async () => {
		process.env.REACT_APP_REFRESH_TIME_PLAYLISTS_SECONDS = 2;
		global.setTimeout = jest.fn((callback) => {
			callback();
		});
		sagaTester.dispatch(Actions.onScheduleRefresh());
		await sagaTester.waitFor(Actions.filterPlaylists.toString());

		expect(global.setTimeout).toHaveBeenCalled();
	});
	it('should show request error if thrown', async () => {
		PlaylistService.filterPlaylists = jest.fn(() => Promise.reject({
			message: 'my custom error',
			status: 400
		}));
		moment.prototype.toDate = jest.fn(() => ({ getTime: () => 123 }));

		sagaTester.dispatch(Actions.filterPlaylists());
		const showMessage = await sagaTester.waitFor(AppActions.showMessage.toString());
		expect(showMessage.payload).toEqual({
			text: 'my custom error',
			generatedAt: 123
		});
	});
	it('should show generic error if thrown', async () => {
		PlaylistService.filterPlaylists = jest.fn(() => Promise.reject({
			status: 500
		}));
		moment.prototype.toDate = jest.fn(() => ({ getTime: () => 123 }));

		sagaTester.dispatch(Actions.filterPlaylists());
		const showMessage = await sagaTester.waitFor(AppActions.showMessage.toString());
		expect(showMessage.payload).toEqual({
			text: 'An error occurred, please contact support!',
			generatedAt: 123
		});
	});
	it('should show auth error if thrown', async () => {
		PlaylistService.filterPlaylists = jest.fn(() => Promise.reject({
			status: 401
		}));
		moment.prototype.toDate = jest.fn(() => ({ getTime: () => 123 }));

		sagaTester.dispatch(Actions.filterPlaylists());
		const setLoggedUser = await sagaTester.waitFor(AppActions.setLoggedUser.toString());
		expect(setLoggedUser.payload).toEqual(null);
	});
});
