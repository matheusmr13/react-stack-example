import Service from 'services/config/service';

describe('Service', () => {
	it('should mount fetch correctly', (done) => {
		global.fetch = jest.fn(() => Promise.resolve({
			json: () => Promise.resolve({ filters: Array(3).fill({}) })
		}));

		expect.assertions(1);
		Service.get('myUrl', {
			qp: {
				myFirstParam: 'value1',
				mySecondParam: 'value2'
			},
			headers: {
				Authorization: 'token'
			}
		}).then(() => {
			expect(fetch).toBeCalledWith('myUrl?myFirstParam=value1&mySecondParam=value2', {
				headers: {
					Authorization: 'token'
				}
			});
			done();
		});
	});
	it('should reject if error prop found', (done) => {
		global.fetch = jest.fn(() => Promise.resolve({
			json: () => Promise.resolve({ error: { message: 'error' } })
		}));

		expect.assertions(1);
		Service.get('myUrl').catch((error) => {
			expect(error).toEqual({
				message: 'error'
			});
			done();
		});
	});
});
