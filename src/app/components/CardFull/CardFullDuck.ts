import initialState from './../../store/initialState';
import {PayloadedAction, Action, createPayloadedAction, createAction} from './../../types/Actions';

//Actions
interface setFullCard extends PayloadedAction<"app/SET_FULL_CARD", any> {}

type fullCardAction = setFullCard

//Reducers
export function fullCardReducer(state = initialState.currentCard, action: fullCardAction) {
  switch (action.type) {
    case "app/SET_FULL_CARD":      
      return action.payload;
    default:
      return state;
  }
}

//Action Creators
export const fullCardActions: any = {
    setFullCard: createPayloadedAction<setFullCard>("app/SET_FULL_CARD"),  
}