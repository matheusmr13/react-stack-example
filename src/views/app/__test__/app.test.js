import React from 'react';
import { shallow } from 'enzyme';
import App from 'views/app';
import Login from 'views/login';

describe('App component', () => {
	const fetchLoggedUser = jest.fn();
	const app = shallow(<App
		loggedUser={null}
		fetchLoggedUser={fetchLoggedUser}
	/>);
	it('should render login properly', () => {
		expect(fetchLoggedUser).toHaveBeenCalled();
		expect(app.find(Login)).toHaveLength(1);
		expect(app).toMatchSnapshot();
	});
	it('should open drawer', () => {
		app.instance().onOpenAppBar();
		expect(app.state().isFilterOpen).toBeTruthy();
	});
	it('should close drawer', () => {
		app.instance().onCloseAppBar();
		expect(app.state().isFilterOpen).toBeFalsy();
	});
	it('should render something other than login', () => {
		app.setProps({
			loggedUser: { access_token: 'token' },
			fetchLoggedUser
		});
		expect(app.find(Login)).toHaveLength(0);
	});
});