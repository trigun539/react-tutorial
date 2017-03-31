import React, { Component } from 'react';
import { render }           from 'react-dom';
import HelloWorld           from 'components/hello-world';
import List                 from 'components/list';

render(
	<div>
		<List />
	</div>
	, document.getElementById('container'));
