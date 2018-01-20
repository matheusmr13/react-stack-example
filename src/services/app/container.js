import { connect } from 'react-redux';
import { createAction } from 'redux-actions';

import AppView from 'views/app';

const mapStateToProps = state => ({
	loggedUser: state.app.loggedUser
});

const mapDispatchToProps = dispatch => ({
	fetchLoggedUser: () => dispatch(createAction('FETCH_LOGGED_USER')())
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppView);

export default AppContainer;
