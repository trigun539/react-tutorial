export const ADD_TODO = 'ADD_TODO'; // Action type
export const RESET_TODOS = 'RESET_TODOS'; // Action type

export function addTodo (todo) { // Action creator
	return { type: ADD_TODO, todo };
};

export function resetTodos () { // Action creator
	return { type: RESET_TODOS };
};
