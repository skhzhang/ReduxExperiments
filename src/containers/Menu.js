import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectItem } from '../actions/index';

class Menu extends Component {

    renderMenu() {
        return this.props.menu.map(item => {
            return (
                <li
                    className="list-group-item"
                    key={item.name}
                    onClick={
                        () => this.props.selectItem(item)
                    }
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

// Return state as props inside Menu
function mapStateToProps(state) {
    return {
        menu: state.menu
    };
}

// Return actions as props inside Menu
function mapDispatchToProps(dispatch) {
    return bindActionCreators(
    {
        selectItem: selectItem
    }, dispatch);
}

// Make Menu a container.
export default connect(mapStateToProps, mapDispatchToProps)(Menu);