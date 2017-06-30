import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemDetails extends Component {
	render() {

		if (!this.props.item) {
			return (
				<div
					className="col-sm-8"
				>
					Select an item to get started!
				</div>
			);
		}

		return (
			<div
				className="col-sm-8"
			>
				{this.props.item.name} - $
				{this.props.item.price}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		item: state.activeItem,
	}
}

export default connect(mapStateToProps)(ItemDetails);