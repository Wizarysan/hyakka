//https://github.com/adityapurwa/typescript-redux
import initialState from './../../store/initialState';
import {PayloadedAction, Action, createPayloadedAction, createAction} from './../../types/Actions';

//Actions
interface SetSearch extends PayloadedAction<"app/SET_SEARCH", string> {}
interface InitiatedSearch extends PayloadedAction<"app/INIT_SEARCH", string> {}
interface SuccessSearch extends PayloadedAction<"app/SUCCESS_SEARCH", string> {}
interface FailureSearch extends Action<"app/FAILURE_SEARCH"> {}

//For several actions try:
type SearchAction = SetSearch | InitiatedSearch | SuccessSearch | FailureSearch;

//Reducers
export function searchReducer(state = initialState.search, action: SearchAction) {
  switch (action.type) {
    case "app/SET_SEARCH":      
      return action.payload;
    default:
      return state;
  }
}

export function resultsReducer(state = initialState.results, action: SearchAction) {
  switch (action.type) {
    case "app/INIT_SEARCH":      
      return {
        ...state,
        loading: true,
        error: false
      };
    case "app/FAILURE_SEARCH":      
      return {
        ...state,
        loading: false,
        error: true
      };
    case "app/SUCCESS_SEARCH":      
      return {
        loading: false,
        error: false,
        body: action.payload
      };
    default:
      return state;
  }
}


//Action Creators
export const searchActions: any = {
    setSearch: createPayloadedAction<SetSearch>("app/SET_SEARCH"),    
    SuccessSearch: createPayloadedAction<SuccessSearch>("app/SUCCESS_SEARCH"),
    InitiatedSearch: createPayloadedAction<InitiatedSearch>("app/INIT_SEARCH"),
    FailureSearch: createAction<FailureSearch>("app/FAILURE_SEARCH"),
    //Connecting to search interface promise chain with thunk:
    startSearch: (searchObject: any, searchQuery: string) => {
      console.log('starting search')
      return (dispatch: Function) => {
        dispatch(searchActions.InitiatedSearch());
        searchObject.search(searchQuery).then(
          (data: any)=> {
            console.log(data)
            dispatch(searchActions.SuccessSearch(data))
          }, 
          (error: any)=>{
            console.error(error)
            dispatch(searchActions.FailureSearch())
          })
      }
    }
}