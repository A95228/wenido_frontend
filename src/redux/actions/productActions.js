import axios from "axios";

import {
    FETCH_PRODUCTS,
    FETCH_PRODUCT,
    START_LOADING_UI,
    STOP_LOADING_UI
} from "../types";
import {addNotif} from "./notifActions";

export const fetchProducts = (query = "?page=1") => dispatch => {
    dispatch({type: START_LOADING_UI});
    axios.get(`/api/products/${query}`).then(response => {
        dispatch({type: FETCH_PRODUCTS, payload: response.data});
        dispatch({type: STOP_LOADING_UI});
    });
};

export const fetchProduct = slug => dispatch => {
    dispatch({type: START_LOADING_UI});
    axios.get(`/api/products/${slug}/`).then(response => {
        console.log("this is response",response.data)
        dispatch({type: FETCH_PRODUCT, payload: response.data});
        dispatch({type: STOP_LOADING_UI});
    });
};
