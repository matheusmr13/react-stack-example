import PlaylistFilterService from 'services/playlist-filter/service';

global.fetch = jest.fn(() => Promise.resolve({
	json: () => Promise.resolve({ filters: Array(3).fill({}) })
}));

describe('PlaylistFilterService', () => {
	it('should get filters from service', (done) => {
		expect.assertions(2);
		PlaylistFilterService.fetchFilters().then((filters) => {
			expect(fetch).toBeCalledWith('http://www.mocky.io/v2/5a25fade2e0000213aa90776');
			expect(filters).toHaveLength(3);
			done();
		});
	});
});
