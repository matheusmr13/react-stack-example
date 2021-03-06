import { createActions, handleActions } from 'redux-actions';

const initialState = {
	loggedUser: null
};

export const Actions = createActions({
	SET_LOGGED_USER: loggedUser => loggedUser,
	SHOW_MESSAGE: message => message,
	FETCH_LOGGED_USER: () => {},
	ON_LOGOUT: () => {}
});

const reducer = handleActions({
	[Actions.setLoggedUser]: (state, { payload: loggedUser }) => ({ ...state, loggedUser }),
	[Actions.showMessage]: (state, { payload: message }) => ({ ...state, message })
}, initialState);

export default reducer;
