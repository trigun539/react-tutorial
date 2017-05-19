export const ADD_TODO = 'ADD_TODO'; // Action type
export const RESET_TODOS = 'RESET_TODOS'; // Action type
export const TOGGLE_TODO = 'TOGGLE_TODO'; // Action type

export function addTodo (todo) { // Action creator
	return { type: ADD_TODO, todo };
};

export function resetTodos () { // Action creator
	return { type: RESET_TODOS };
};

export function toggleTodo (todo) { // Action creator
	return { type: TOGGLE_TODO, todo };
};
