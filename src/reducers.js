import { combineReducers } from 'redux';
import {
	ADD_TODO,
	RESET_TODOS
} from 'actions';

const initialState = [];

export const todos = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				action.todo
			];
		case RESET_TODOS:
			return [];
		default:
			return state;
	}
};

export const users = (state = [], action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default combineReducers({
	todos,
	users
});
