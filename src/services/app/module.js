import { createActions, handleActions } from 'redux-actions';

const initialState = {
	loggedUser: null
};

export const Actions = createActions({
	SET_LOGGED_USER: loggedUser => loggedUser,
	FETCH_LOGGED_USER: () => {},
	ON_LOGOUT: () => {}
});

const reducer = handleActions({
	[Actions.setLoggedUser]: (state, { payload: loggedUser }) => ({ ...state, loggedUser })
}, initialState);

export default reducer;
