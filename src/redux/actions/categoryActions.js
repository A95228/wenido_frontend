import {FETCH_CATEGORIES,START_LOADING_UI,STOP_LOADING_UI} from "../types";
import axios from "axios";

export const fetchCategories = dispatch => {
    dispatch({ type: START_LOADING_UI });
    axios.get(`/api/categories/`).then(response => {
        dispatch({ type: FETCH_CATEGORIES, payload: response.data });
        dispatch({ type: STOP_LOADING_UI });
    });
};
