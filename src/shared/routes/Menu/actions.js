import "isomorphic-fetch";
import {getBaseURL} from '../../../server/api';
let baseURL = getBaseURL();

import {
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE 
} from "./constants";

// Action Creators
const requestProducts = () => ({ type: FETCH_PRODUCTS });
const receivedProducts = news => ({ type: FETCH_PRODUCTS_SUCCESS, payload: news });
const productError = () => ({ type: FETCH_PRODUCTS_FAILURE });

export const fetchProducts = () => (dispatch, getState) => {
  dispatch(requestProducts());
  return fetch(`${baseURL}/restaurant/`)
    .then(response => response.json())
    .then(news => dispatch(receivedProducts(news)))
    .catch(err => dispatch(productError(err)));
};