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
        dispatch({type: FETCH_PRODUCT, payload: response.data});
        dispatch({type: STOP_LOADING_UI});
    });
};

export const addNewProduct = newProduct => dispatch => {
    dispatch({type: START_LOADING_UI});

    // axios(`http://localhost:8000/api/products/`, newProduct, {
    //     headers: {
    //         'Content-Type': 'multipart/form-data'
    //     }
    // }).then(response => {
    //     console.log("okokokokokokokokokok", newProduct)
    //     fetchProducts();
    //     dispatch({type: STOP_LOADING_UI});
    // }).catch(error=>console.log(error));

    axios({
        method: 'post',
        url: '/api/products/',
        data: newProduct,
        headers: {'Content-Type': 'multipart/form-data' }
    })
        .then(function (response) {
            dispatch(
                addNotif({
                    message: `New product created!`,
                    options: { variant: "info" }
                })
            );
            dispatch({type: STOP_LOADING_UI});
        })
        .catch(function (response) {
            dispatch({type: STOP_LOADING_UI});
            dispatch(
                addNotif({
                    message: `Creating product failed!`,
                    options: { variant: "error" }
                })
            );
            console.log(response.toString());
        });
};