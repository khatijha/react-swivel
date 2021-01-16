import { call, put ,takeEvery, all, fork } from 'redux-saga/effects';
import * as api from '../Api/UserApi';
import {updateFeaturedProduct,
    updateOnSaleProduct,
    updateTopSellProduct,
    updateAllProduct,allCategory, searchProduct} from '../redux/product/action';
import {FETCH_HOME_PRODUCT} from "../redux/constants";

export function * fetchHomeProduct() {
    try {
        const response1 = yield call(api.getFeatured);
        console.log("=======saga== 1 =======",response1.status)
        if(response1.status === 200) {
            yield put(updateFeaturedProduct(response1.data));
        }

        const response2 = yield call(api.getOnSale);
        if(response2.status === 200) {
            yield put(updateOnSaleProduct(response2.data));
        }
        
        console.log("=======saga==== 2 =====",response2.status)
        const response3 = yield call(api.getTopSell);
        if(response3.status === 200) {
            yield put(updateTopSellProduct(response3.data));
        }
        console.log("=======saga==== 3 =====",response3.status)
        const response4 = yield call(api.getAllProduct);
        if(response4.status === 200) {
            yield put(updateAllProduct(response4.data));
        }
        console.log("========saga====4 =====",response4.status)
        
        const response5 = yield call(api.getCategory)
        if (response5.status === 200) {
            yield put(allCategory(response5.data))
        }
        console.log("========saga====5 =====",response5.status)        
    } catch(e) {
        console.log(e)
        return;
    }
}
export function * fetchHomeProductSaga() {

    yield takeEvery(FETCH_HOME_PRODUCT, fetchHomeProduct)
}

export default function* rootSaga() {
    yield all([
        fork(fetchHomeProductSaga)
    ])
}