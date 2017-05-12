import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { addTodo }          from 'actions';

export class App extends Component {

	render () {
		const { todos, addTodo } = this.props;

		const listItems = todos.map((x, i) => {
			return <li key={ i }>{x.text}</li>;
		});

		return (
			<div >
				<h1>The todo list app</h1>
				<ul>
					{ listItems }
				</ul>
				<input id="theInput" ref="input" type="text" placeholder="Add Todo" />
				<button onClick={ () => {
					addTodo({ text: this.refs.input.value });
				}}>Add Todo</button>
			</div>
		);
	}

}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTodo (todo) { dispatch(addTodo(todo)); }
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
