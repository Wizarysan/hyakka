import {combineReducers} from 'redux';
import {searchReducer, resultsReducer} from './../components/Search/SearchDuck';

const rootReducer = combineReducers({
    search: searchReducer,
    results: resultsReducer
})

export default rootReducer;