import React, { Component } from 'react';
import { connect } from 'react-redux';

class Menu extends Component {

	renderMenu() {
		return this.props.menu.map(item => {
			return (
				<li
					className="list-group-item"
					key={item.name}
				>
					{item.name}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderMenu()}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	return {
		menu: state.menu
	};
}

export default connect(mapStateToProps)(Menu);