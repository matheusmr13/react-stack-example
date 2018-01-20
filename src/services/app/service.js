const AuthService = {
	getLoggedUser() {
		if (!window.location.hash) {
			window.location = `https://accounts.spotify.com/authorize?client_id=a94d7c3f7ae64cd4a78bd9b7b02c08d9&response_type=token&redirect_uri=${window.location.href}&state=123`;
		} else {
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
