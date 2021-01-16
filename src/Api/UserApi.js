import {sendRequest, requestMethod} from './BaseApi'

const auth = {
    TRUE: true,
    FALSE: false
};

export async function getFeatured(){
    return sendRequest(
        'product/featured',
        requestMethod.GET,
    )
}

export async function getOnSale(){
    return sendRequest(
        'product/on_sale',
        requestMethod.GET,
    )
}

export async function getTopSell(){
    return sendRequest(
        'product/top_sell',
        requestMethod.GET,
    )
}

export async function getAllProduct(){
    return sendRequest(
        'product/all_all',
        requestMethod.GET,
    )
}

export async function getCategory(){
    return sendRequest(
        'category/category/parallel',
        requestMethod.GET,
    )
}