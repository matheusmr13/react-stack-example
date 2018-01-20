import { connect } from 'react-redux';

import { Actions } from 'services/app/module';
import AppView from 'views/app';

const mapStateToProps = state => ({
	loggedUser: state.app.loggedUser
});

const mapDispatchToProps = dispatch => ({
	fetchLoggedUser: () => dispatch(Actions.fetchLoggedUser())
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppView);

export default AppContainer;
