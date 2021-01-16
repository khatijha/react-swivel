import {sendRequest, requestMethod} from './BaseApi'

const auth = {
    TRUE: true,
    FALSE: false
};

/**
 * Authentication
 *
 * @returns {Promise}
 */

 export async function addToOrderCart(requestObj){
     return sendRequest(
        'order/addordercart/',
        requestMethod.POST,
        auth.TRUE,
        requestObj
     )
 }
 export async function getOrderProduct(userEmail){
    return sendRequest(
        'order/customerorder',
        requestMethod.POST,
        auth.TRUE,
        userEmail,
    )
}