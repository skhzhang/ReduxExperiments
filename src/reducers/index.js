import { combineReducers } from 'redux';

import MenuReducer from './reducer_menu';
import ItemDetailsReducer from './reducer_itemDetails';

const rootReducer = combineReducers({
    menu: MenuReducer,
    activeItem: ItemDetailsReducer,
});

export default rootReducer;
