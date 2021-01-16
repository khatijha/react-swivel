import { call, put, all, fork  } from 'redux-saga/effects';
import * as api from '../Api/ChildrenApi';
import {getMeSuccess, emailConfirmAction, logout} from '../redux/auth/action';


export function * getMe() {
  try {
    const response = yield call(api.getMe);
    if(response.status === 200) {      
      yield put(getMeSuccess(response.data));
    }
  } catch(e) {
    yield put(logout());
  }
}


// export function * activate() {
//   try {
//     const response = yield call(api.activate);
//     if(response.status === 200) {
//       yield put(emailConfirmAction(response.data));
//     }
//   } catch(e) {
//     yield put(logout());
//   }
// }

export default function* rootSaga() {
  yield all([
    fork(getMe)
  ])
}

