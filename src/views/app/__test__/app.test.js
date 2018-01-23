import React from 'react';
import { shallow } from 'enzyme';
import App from 'views/app';
import Landing from 'views/landing';

describe('App component', () => {
	const fetchLoggedUser = jest.fn();
	const app = shallow(<App
		loggedUser={null}
		fetchLoggedUser={fetchLoggedUser}
	/>);
	it('should render login properly', () => {
		expect(fetchLoggedUser).toHaveBeenCalled();
		expect(app.find(Landing)).toHaveLength(1);
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
		expect(app.find(Landing)).toHaveLength(0);
	});
});
