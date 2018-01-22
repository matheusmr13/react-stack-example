import React from 'react';
import { shallow } from 'enzyme';
import App from 'views/app';

describe('App component', () => {
	const fetchLoggedUser = jest.fn();
	const app = shallow(<App
		loggedUser={null}
		fetchLoggedUser={fetchLoggedUser}
	/>);
	it('should render properly', () => {
		expect(fetchLoggedUser).toHaveBeenCalled();
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
});
