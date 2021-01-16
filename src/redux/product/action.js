import {
    EDIT_PRODUCT,
    FETCH_HOME_PRODUCT,
    GET_FEATURED_PRODUCT,
    UPDATE_FEATURED_PRODUCT,
    UPDATE_TOPSELL_PRODUCT,
    UPDATE_ONSALE_PRODUCT,
    SELECT_PRODUCT,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ONE_DETAIL,
    ADD_TO_ORDER_CART,
    ADD_LIST,
    LIST_PRODUCT,
    SELECT_LIST_NAME,
    SHIP_DETAIL,
    GET_ORDER_PRODUCT,
    UPDATE_ALL_PRODUCT,
    ALL_CATEGORY,
    UPDATE_PRICE,
    UPDATE_SEARCH_VALUE_TC,
    UPDATE_SEARCH_VALUE_C,
    UPDATE_SEARCH_VALUE_B,
    UPDATE_SEARCH_VALUE_CON,
    SEARCH_PRODUCT,
    BRAND,
    SORT_PRODUCT,
    PAGE_NUMBER,
    PAGE_PRODUCT,
    SEARCHED_NUMBER
} from '../constants/';

export const page_number = (payload) =>{
    return{
        type: PAGE_NUMBER,
        payload
    }
}

export const searched_number = (payload) =>{
    return{
        type: SEARCHED_NUMBER,
        payload
    }
}


export const sort_product = (payload) =>{
    return{
        type: SORT_PRODUCT,
        payload
    }
}

export const updateSearchValue_con = (payload) => {
    return {
        type: UPDATE_SEARCH_VALUE_CON,
        payload
    }
}

export const updateSearchValue_b = (payload) => {
    return {
        type: UPDATE_SEARCH_VALUE_B,
        payload
    }
}

export const updateSearchValue_c = (payload) =>{
    return {
        type: UPDATE_SEARCH_VALUE_C,
        payload
    }
}

export const updateSearchValue_tc = (payload) => {
    return {
        type: UPDATE_SEARCH_VALUE_TC,
        payload
    }
}

export const UpdatePrice = (payload) => {
    return {
        type: UPDATE_PRICE,
        payload
    }
}

export const allCategory = (payload) => {
    return {
        type: ALL_CATEGORY,
        payload
    }
}

export const updateAllProduct = (payload) => {
    return{
        type: UPDATE_ALL_PRODUCT,
        payload
    }
};

export const editProduct = (payload) => {
    return {
        type: EDIT_PRODUCT,
        payload
    }
};

export const getFeaturedProduct = (payload) => {
    return {
        type: GET_FEATURED_PRODUCT,
        payload
    }
};

export const updateFeaturedProduct = (payload) => {
    return {
        type: UPDATE_FEATURED_PRODUCT,
        payload
    }
};

export const updateOnSaleProduct = (payload) => {
    return {
        type: UPDATE_ONSALE_PRODUCT,
        payload
    }
};

export const updateTopSellProduct = (payload) => {
    return {
        type: UPDATE_TOPSELL_PRODUCT,
        payload
    }
};

export const fetchHomeProduct = (payload) => {
    return {
        type:  FETCH_HOME_PRODUCT,
        payload
    }
}

export const selectProduct = (payload) => {
    return {
        type:  SELECT_PRODUCT,
        payload
    }
}

export const addToCart = (payload) => {
    return {
        type:  ADD_TO_CART,
        payload
    }
}

export const removeFromCart = (payload) => {
    return {
        type:  REMOVE_FROM_CART,
        payload
    }
}
export const checkOneDetail = (payload) => {
    return {
        type: ONE_DETAIL,
        payload
    }
}
export const addToOrderCart = (payload) => {
    return {
        type: ADD_TO_ORDER_CART,
        payload
    }
}
export const addToList = (payload) => {
    return{
        type: ADD_LIST,
        payload
    }
}
export const addToListProduct = (payload) => {
    return{
        type: LIST_PRODUCT,
        payload
    }
}
export const selectListName = (payload) => {
    return {
        type: SELECT_LIST_NAME,
        payload
    }
}
export const shipDetail = (payload) =>{
    return {
        type: SHIP_DETAIL,
        payload
    }
}