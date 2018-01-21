class AppService {
	static checkLoggedUser() {
		let loggedUser;
		if (this.hasUserJustLoggedIn()) {
			loggedUser = this.getLoggedUserFromHash();
			this.clearHash();
			this.saveUser(loggedUser);
		} else {
			loggedUser = this.getLoggedUserFromStorage();
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

	static saveUser = (user) => {
		window.localStorage.setItem('loggedUser', JSON.stringify(user));
	}

	static getLoggedUserFromStorage() {
		const loggedUserString = window.localStorage.getItem('loggedUser');
		return loggedUserString && JSON.parse(loggedUserString);
	}
}

export default AppService;
