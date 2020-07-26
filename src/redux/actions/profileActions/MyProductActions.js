import {FETCH_MY_PRODUCTS, START_LOADING_UI, STOP_LOADING_UI} from "../../types";
import axios from "axios";
import {addNotif} from "../notifActions";

export const addNewProduct = newProduct => dispatch => {
    dispatch({type: START_LOADING_UI});

    axios.post(`/api/products/myproducts/`, newProduct, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).then(response => {
        dispatch(
            addNotif({
                message: `New product created!`,
                options: { variant: "info" }
            })
        );
        dispatch({type: STOP_LOADING_UI});
    }).catch(error=> {
        dispatch({type: STOP_LOADING_UI});
        dispatch(
            addNotif({
                message: `Creating product failed!`,
                options: { variant: "error" }
            })
        );
        console.log(error.toString());
    });
};

export const fetchMyProducts = () => dispatch => {
    dispatch({ type: START_LOADING_UI });
    axios.get("/api/products/myproducts/").then(response => {
        dispatch({ type: FETCH_MY_PRODUCTS, payload: response.data });
        dispatch({ type: STOP_LOADING_UI });
    });
};