import React, { Component } from 'react';

export default class App extends Component {

	constructor (props) {
		super(props);

		this.state = {
			todos: props.todos
		};
	}

	addHandler (newTodo) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: this.state.todos.length + 1,
					text: newTodo,
					done: false
				}
			]
		});
	}

	render () {
		const { todos } = this.state;
		const listItems = todos.map(x => {
			return <li key={x.id}>{x.text}</li>;
		});

		return (
			<div >
				<h1>The todo list app</h1>
				<ul>
					{ listItems }
				</ul>
				<input id="theInput" ref="input" type="text" placeholder="Add Todo" />
				<button onClick={ () => {
					this.addHandler(this.refs.input.value);
				}}>Add Todo</button>
			</div>
		);
	}

}
