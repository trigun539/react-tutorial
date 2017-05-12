import React           from 'react';
import { Provider }    from 'react-redux';
import { createStore } from 'redux';
import { render }      from 'react-dom';
import App             from 'components/app';
import Reducers        from 'reducers';

// Store
let store = createStore(Reducers);

window.store = store;

render(
	<Provider store={store} >
		<App />
	</Provider>
	, document.getElementById('container'));
