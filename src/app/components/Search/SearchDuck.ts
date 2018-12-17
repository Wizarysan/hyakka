//https://github.com/adityapurwa/typescript-redux
import initialState from './../../store/initialState';
import {PayloadedAction, Action, createPayloadedAction, createAction} from './../../types/Actions';

//Actions
interface SetSearch extends PayloadedAction<"app/SET_SEARCH", string> {}
interface StartSearch extends PayloadedAction<"app/START_SEARCH", string> {}
interface SuccessSearch extends PayloadedAction<"app/SUCCESS_SEARCH", string> {}
interface FailureSearch extends Action<"app/FAILURE_SEARCH"> {}

//For several actions try:
type SearchAction = SetSearch | StartSearch | SuccessSearch | FailureSearch;

//Reducer
export default function reducer(state = initialState.search, action: SearchAction) {
  switch (action.type) {
    case "app/SET_SEARCH":      
      return action.payload;
    default:
      return state;
  }
}

//Action Creators
export const searchActions: Object = {
    setSearch: createPayloadedAction<SetSearch>("app/SET_SEARCH"),
    startSearch: createPayloadedAction<StartSearch>("app/START_SEARCH"),
    SuccessSearch: createPayloadedAction<SuccessSearch>("app/SUCCESS_SEARCH"),
    FailureSearch: createAction<FailureSearch>("app/FAILURE_SEARCH"),
}