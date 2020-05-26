import "isomorphic-fetch";
import {getBaseURL} from '../../../server/api';
let baseURL = getBaseURL();

import {
    FETCH_RESTAURANT,
    FETCH_RESTAURANT_SUCCESS,
    FETCH_RESTAURANT_FAILURE 
} from "./constants";

// Action Creators
const requestRestaurant = () => ({ type: FETCH_RESTAURANT });
const receivedRestaurant = news => ({ type: FETCH_RESTAURANT_SUCCESS, payload: news });
const restaurantError = () => ({ type: FETCH_RESTAURANT_FAILURE });

export const fetchRestaurant = () => (dispatch, getState) => {
  dispatch(requestRestaurant());
  return fetch(`${baseURL}/restaurant/`)
    .then(response => response.json())
    .then(news => dispatch(receivedRestaurant(news)))
    .catch(err => dispatch(restaurantError(err)));
};