class FilterService {
	static fetchFilters() {
		return fetch(process.env.REACT_APP_FILTER_URL)
			.then(resp => resp.json())
			.then(({ filters }) => filters);
	}
}

export default FilterService;
