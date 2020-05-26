import {
    FETCH_RESTAURANT_SUCCESS,
} from "./constants";


// Reducer
export default function reducer(state = {}, action) {
    switch (action.type) {
      case FETCH_RESTAURANT_SUCCESS:
        // console.log("FETCH_RESTAURANT_SUCCESS", action.payload)
        return { ...state, data: action.payload };
  
      default:
        return state;
    }
  }