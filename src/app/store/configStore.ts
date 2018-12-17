import {createStore, applyMiddleware} from 'redux';
import rootReducer from './../store/rootReducer';
import thunk from 'redux-thunk';
import { State } from '../types/State';

export default function configureStore(initialState: State) {
  return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk)
  );
}
