const AuthService = {
	getLoggedUser() {
		if (window.location.hash) {
			const paramsString = window.location.hash.substring(1);
			const params = JSON.parse(`{"${paramsString.replace(/=/g, '":"').replace(/&/g, '","')}"}`);
			return params;
			// fetch('https://api.spotify.com/v1/me', {
			// 	headers: {
			// 		Authorization: `Bearer ${params.access_token}`
			// 	}
			// })
			// 	.then(resp => resp.json())
			// 	.then((user) => {
			// 		console.info(user);
			// 	});
		}
		return null;
	}
};

export default AuthService;
