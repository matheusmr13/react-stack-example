import AppService from 'services/app/service';

describe('App service test', () => {
	const userJson = {
		access_token: 'token',
		expires_in: '3600'
	};
	const userHash = '#access_token=token&expires_in=3600';

	let store = {};
	const localStorageMock = {
		getItem: key => store[key] || null,
		setItem(key, value) {
			store[key] = value.toString();
		}
	};
	Object.defineProperty(window, 'localStorage', {
		value: localStorageMock
	});

	beforeEach(() => {
		store = {};
		window.location.hash = '';
	});

	it('should clear hash', () => {
		window.location.hash = '#myHash';
		AppService.clearHash();
		expect(window.location.hash).toBe('');
	});
	it('should know if user just logged in', () => {
		window.location.hash = '#access_token=token';
		AppService.hasUserJustLoggedIn();
		expect(AppService.hasUserJustLoggedIn()).toBeTruthy();

		AppService.clearHash();
		expect(AppService.hasUserJustLoggedIn()).toBeFalsy();
	});
	it('should get logged user from hash', () => {
		window.location.hash = userHash;
		const user = AppService.getLoggedUserFromHash();
		expect(user).toEqual(userJson);
	});
	it('should save and retrieve logged user from storage', () => {
		expect(AppService.getLoggedUserFromStorage()).toBeNull();
		AppService.saveUser(userJson);
		const user = AppService.getLoggedUserFromStorage();
		expect(user).toHaveProperty('expireDate');
		delete user.expireDate;
		expect(user).toEqual(userJson);
	});
	it('should check if there is any logged user', () => {
		expect(AppService.checkLoggedUser()).toBeNull();
		window.location.hash = userHash;
		AppService.isTokenExpired = jest.fn(() => false);

		let user = AppService.checkLoggedUser();

		expect(AppService.isTokenExpired).toHaveBeenCalledTimes(1);
		expect(user).toHaveProperty('expireDate');
		delete user.expireDate;
		expect(user).toEqual(userJson);

		user = AppService.checkLoggedUser();
		expect(AppService.isTokenExpired).toHaveBeenCalledTimes(2);
		expect(user).toHaveProperty('expireDate');
		delete user.expireDate;
		expect(user).toEqual(userJson);
	});
});
