import React, { Component } from 'react';
import App from './app';

export default class AppWrapper extends Component {
	constructor (props) {
		super(props);
		
		this.state = {
			todos: [
				{ id: 1, text: 'Learn react', done: false },
				{ id: 2, text: 'Learn JS', done: false }
			]
		};
	}
	render () {
		const { todos } = this.state;

		return (
			<div>
				<App todos={ todos } onChange={}/>
				<App todos={ todos }/>
				<App todos={ todos }/>
			</div>
		);
	}
}
