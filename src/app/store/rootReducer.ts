import {combineReducers} from 'redux';
import {searchReducer, resultsReducer} from './../components/Search/SearchDuck';
import { filterReducer } from '../components/SearchForm/FilterDuck';
import { fullCardReducer } from '../components/CardFull/CardFullDuck';

const rootReducer = combineReducers({
    search: searchReducer,
    results: resultsReducer,
    filters: filterReducer,
    currentCard: fullCardReducer
})

export default rootReducer;