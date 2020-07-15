import {
    FETCH_CATEGORIES
} from "../types";

const initialState = {
    categories:[],
};
export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_CATEGORIES:
            console.log("this is payload",payload)
            return { ...state, categories: payload };
        default:
            return state;
    }
};
