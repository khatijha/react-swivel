import { takeLatest, all } from 'redux-saga/effects';
import { getMe } from './AuthSaga';
import { GET_ME } from '../redux/constants/';
import productSaga from './ProductSaga'
import authSaga from './AuthSaga'
export default function * root () {
  yield all([
    // some sagas only receive an action
    productSaga(),
    authSaga()
  ]);
}
