import {
    FETCH_PRODUCTS_SUCCESS,
} from "./constants";


// Reducer
export default function reducer(state = {}, action) {
    switch (action.type) {
      case FETCH_PRODUCTS_SUCCESS:
        return { ...state, products: action.payload };
  
      default:
        return state;
    }
  }