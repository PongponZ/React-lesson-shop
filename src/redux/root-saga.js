import { all, call } from 'redux-saga/effects'
import { fectchCollectionStart } from './shop/shop.saga'
import { userSaga } from './user/user.saga'

export default function* rootSaga(){
    yield all([
        call(fectchCollectionStart),
        call(userSaga)
    ])
}