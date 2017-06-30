import React, { Component } from 'react';

import ItemDetails from '../containers/ItemDetails';
import Menu from '../containers/Menu';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>Today's Menu</h1>
                <Menu />
                <ItemDetails />
            </div>
        );
    }
}
