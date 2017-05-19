import { combineReducers } from 'redux';
import {
	ADD_TODO,
	RESET_TODOS,
	TOGGLE_TODO
} from 'actions';

const initialState = [];

export const todos = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{ text: action.todo.text, done: false }
			];
		case TOGGLE_TODO:
			const newTodos = [];

			state.forEach(todo => {
				if (todo.text === action.todo.text) {
					newTodos.push({
						text: todo.text,
						done: !todo.done
					});
				} else {
					newTodos.push({ ...todo });
				}
			});

			return newTodos;
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
