import React, { Component } from 'react';

export default class App extends Component {

	render () {
		const todos = [
			{ id: 1, text: 'Add redux to app', done: false },
			{ id: 2, text: 'Create list component', done: false },
			{ id: 3, text: 'Create input component', done: false }
		];

		return (
			<div>
				<h1>NG Todo List</h1>
				<TodoList todos={ todos } />
			</div>
		);
	}
}
