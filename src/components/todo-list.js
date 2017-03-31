import React, { Component } from 'react';

export default class TodoList extends Component {
	render () {
		const { todos } = this.props;

		return (
			<h1>The list</h1>
		);
	}
}
