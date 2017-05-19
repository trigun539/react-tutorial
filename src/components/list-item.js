import React, { Component } from 'react';

class ListItem extends Component {

	render () {
		const { text, done, action } = this.props;
		const style = {
			textDecoration: done ? "line-through" : "none"
		};
		
		return (
			<li style={ style }>
				{ text }
				<input type="checkbox" onClick={ action } />
			</li>
		);
	}

}

ListItem.propTypes = {};

export default ListItem;
