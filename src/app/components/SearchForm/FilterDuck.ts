import initialState from './../../store/initialState';
import {PayloadedAction, Action, createPayloadedAction, createAction} from './../../types/Actions';

//Actions
interface filterNameOn extends Action<"app/FILTER_NAME_ON"> {}
interface filterNameOff extends Action<"app/FILTER_NAME_OFF"> {}

//For several actions try:
type FilterAction = filterNameOn | filterNameOff

//Reducers
export function filterReducer(state = initialState.filters, action: FilterAction) {
  switch (action.type) {
    case "app/FILTER_NAME_ON":      
      return {
          ...state,
          name: true
      };
    case "app/FILTER_NAME_OFF":      
      return {
          ...state,
          name: false
      };
    default:
      return state;
  }
}

//Action Creators
export const filterActions: any = {
    filterNameOn: createAction<filterNameOn>("app/FILTER_NAME_ON"),    
    filterNameOff: createAction<filterNameOff>("app/FILTER_NAME_OFF"),    
}