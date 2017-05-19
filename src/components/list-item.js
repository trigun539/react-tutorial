import React, { Component } from 'react';

class ListItem extends Component {

	render () {
		const { text } = this.props;

		return (
			<li>
				{ text }
				<input type="checkbox" />
			</li>
		);
	}

}

ListItem.propTypes = {};

export default ListItem;
