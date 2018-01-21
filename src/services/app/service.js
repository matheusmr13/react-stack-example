import moment from 'moment';

class AppService {
	static DATETIME_FORMAT = 'YYYYMMDD hhmmss';
	static checkLoggedUser() {
		if (this.hasUserJustLoggedIn()) {
			const loggedInUser = this.getLoggedUserFromHash();
			this.clearHash();
			this.saveUser(loggedInUser);
		}

		const loggedUser = this.getLoggedUserFromStorage();
		if (!loggedUser) {
			return null;
		}

		loggedUser.expireDate = moment(loggedUser.expireDate, this.DATETIME_FORMAT);

		const expireDate = moment(loggedUser.expireDate);
		const now = moment();

		if (expireDate.isBefore(now)) {
			return null;
		}

		return loggedUser;
	}

	static hasUserJustLoggedIn() {
		return !!window.location.hash;
	}

	static clearHash() {
		window.location.hash = '';
	}

	static getLoggedUserFromHash() {
		const paramsString = window.location.hash.substring(1);
		const loggedUserString = `{"${paramsString.replace(/=/g, '":"').replace(/&/g, '","')}"}`;
		return JSON.parse(loggedUserString);
	}

	static saveUser(user) {
		window.localStorage.setItem('loggedUser', JSON.stringify({
			...user,
			expireDate: moment()
				.add(parseInt(user.expires_in, 10), 'seconds')
				.format(this.DATETIME_FORMAT)
		}));
	}

	static getLoggedUserFromStorage() {
		const loggedUserString = window.localStorage.getItem('loggedUser');
		if (!loggedUserString) {
			return null;
		}
		return JSON.parse(loggedUserString);
	}
}

export default AppService;
