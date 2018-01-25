import React from 'react';
import { shallow } from 'enzyme';
import App from 'views/app';
import Landing from 'views/landing';
import Snackbar from 'material-ui/Snackbar';

describe('App component', () => {
	const fetchLoggedUser = jest.fn();
	let app;
	beforeEach(() => {
		app = shallow(<App
			loggedUser={null}
			fetchLoggedUser={fetchLoggedUser}
			message={{
				text: 'foo',
				generatedAt: new Date().getTime()
			}}
		/>, { lifecycleExperimental: true });
	});

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
	it('should render message component after changing text', () => {
		app.setProps({
			message: {
				text: 'My message',
				generatedAt: new Date().getTime() + 10
			}
		});
		expect(app.find(Snackbar)).toHaveLength(1);
	});
});
