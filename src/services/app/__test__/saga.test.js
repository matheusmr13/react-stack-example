import SagaTester from 'redux-saga-tester';
import { Actions } from 'services/app/module';
import AppSaga from 'services/app/saga';
import AppService from 'services/app/service';
import { reducers } from 'services/config/redux';

const user = {
	access_token: 'token'
};
const userInfos = {
	name: 'myname'
};
jest.mock('services/spotify/service', () => ({
	fetchLoggedUserInfos: () => Promise.resolve({ name: 'myname' })
}));

AppService.checkLoggedUser = jest.fn(() => Promise.resolve(user));

describe('AppSaga', () => {
	let sagaTester = null;

	beforeEach(() => {
		sagaTester = new SagaTester({
			initialState: {},
			reducers
		});
		sagaTester.start(AppSaga);
	});

	it('should fetch user and set logged user on state', async () => {
		sagaTester.dispatch(Actions.fetchLoggedUser());
		let setLoggedUser = await sagaTester.waitFor(Actions.setLoggedUser.toString());
		expect(setLoggedUser.payload).toEqual(user);

		await sagaTester.waitFor(Actions.setLoggedUser.toString());
		setLoggedUser = sagaTester.getLatestCalledAction();

		expect(setLoggedUser.payload).toEqual({
			...user,
			info: userInfos
		});
	});

	it('should logout user and set logged user to null', async () => {
		AppService.logout = jest.fn();

		sagaTester.dispatch(Actions.onLogout());
		const setLoggedUser = await sagaTester.waitFor(Actions.setLoggedUser.toString());

		expect(AppService.logout).toHaveBeenCalled();
		expect(setLoggedUser.payload).toEqual(null);
	});
});
