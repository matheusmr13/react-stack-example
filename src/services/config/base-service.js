const paramsToUrl = filters => Object.keys(filters)
	.map(k => `${encodeURIComponent(k)}=${encodeURIComponent(filters[k])}`)
	.join('&');

class BaseService {
	static get(url, options) {
		const { qp, ...fetchOptions } = options;
		let urlToGet = url;
		if (qp) {
			urlToGet += `?${paramsToUrl(qp)}`;
		}

		return fetch(urlToGet, fetchOptions)
			.then(resp => resp.json());
	}
}

export default BaseService;
