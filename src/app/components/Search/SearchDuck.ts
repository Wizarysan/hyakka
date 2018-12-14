import initialState from './../../store/initialState';

//Actions
const SET_CITY = 'app/City/SET_CITY';

//Reducer
export default function reducer(state = initialState.search, action) {
  switch (action.type) {
    case SET_CITY:      
      return action.city;
    default:
      return state;
  }
}

//Action Creators
export const searchActions: Object = {
    setCity: (city: string) => {
        return {
            type: SET_SEARCH,
            city
        }
    }
}