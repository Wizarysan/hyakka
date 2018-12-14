//https://github.com/adityapurwa/typescript-redux
import initialState from './../../store/initialState';
import {PayloadedAction, createPayloadedAction} from './../../types/Actions';

//Actions
interface SetSearch extends PayloadedAction<"app/SET_SEARCH", string> {}

//For several actions try:
//type SearchAction = SetSearch | SomeOtherAction;

//Reducer
export default function reducer(state = initialState.search, action: SetSearch) {
  switch (action.type) {
    case "app/SET_SEARCH":      
      return action.payload;
    default:
      return state;
  }
}

//Action Creators
export const searchActions: Object = {
    setSearch: createPayloadedAction<SetSearch>("app/SET_SEARCH")
}