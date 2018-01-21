class FilterService {
	static fetchFilters() {
		return fetch('http://www.mocky.io/v2/5a25fade2e0000213aa90776')
			.then(resp => resp.json())
			.then(({ filters }) => filters);
	}
}

export default FilterService;
