import React, { Component } from 'react';
import { render }           from 'react-dom';
import App                  from 'components/app';

const theTodos = [
	{ id: 1, text: 'Learn react', done: false },
	{ id: 2, text: 'Learn JS', done: false }
];

render(
	<App
		todos={ theTodos } />
	, document.getElementById('container'));
