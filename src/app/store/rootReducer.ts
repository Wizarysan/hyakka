import {combineReducers} from 'redux';
import {searchReducer, resultsReducer} from './../components/Search/SearchDuck';
import { filterReducer } from '../components/SearchForm/FilterDuck';

const rootReducer = combineReducers({
    search: searchReducer,
    results: resultsReducer,
    filters: filterReducer
})

export default rootReducer;