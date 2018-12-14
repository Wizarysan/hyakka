import {combineReducers} from 'redux';
import SearchReducer from './../components/Search/SearchDuck';

const rootReducer = combineReducers({
    search: SearchReducer
})

export default rootReducer;