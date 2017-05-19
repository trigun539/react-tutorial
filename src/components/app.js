import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { addTodo, toggleTodo }          from 'actions';
import CustomComponent      from './custom-component';
import ListItem             from './list-item';

export class App extends Component {

	render () {
		const { todos, addTodo, toggleTodo } = this.props;

		const listItems = todos.map((x, i) => {
			return <ListItem key={ i } text={ x.text } done={ x.done } action={ () => { toggleTodo(x); }} />;
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
		addTodo (todo) { dispatch(addTodo(todo)); },
		toggleTodo (todo) { dispatch(toggleTodo(todo)); }
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
