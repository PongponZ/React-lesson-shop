import { all, put, takeLatest, call } from 'redux-saga/effects'

import { clearCart } from './cart.action'
import UserActionType from '../user/user.types'

export function* clearCartOnSignOut() {
    yield put(clearCart())
}

export function* onSignOutSuccess(){
    yield takeLatest(UserActionType.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas(){
    yield all([
        call(onSignOutSuccess)
    ])
}