const paramsToUrl = filters => Object.keys(filters)
	.map(k => `${encodeURIComponent(k)}=${encodeURIComponent(filters[k])}`)
	.join('&');

class Service {
	static get(url, options = {}) {
		const { qp, ...fetchOptions } = options;
		let urlToGet = url;
		if (qp) {
			urlToGet += `?${paramsToUrl(qp)}`;
		}

		return new Promise((resolve, reject) => {
			fetch(urlToGet, fetchOptions)
				.then(resp => resp.json())
				.then((data) => {
					if (data.error) {
						reject(data.error);
					}
					resolve(data);
				});
		});
	}
}

export default Service;
