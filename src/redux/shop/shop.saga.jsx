import { takeEvery, call, put} from 'redux-saga/effects';

import { firestore ,converCollectionToMap } from '../../firebase/firebase.utils'

import ShopActionTypes from './shop.typs'
import { fetchCollectionsSuccess , fetchCollectionsFailure } from './shop.actions'

export function* fectchCollectionAsync(){
    try {
        const collectionRef = firestore.collection('collection')
        const snapShot = yield collectionRef.get()
        const collectionsMap = yield call(converCollectionToMap, snapShot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }
}


export function* fectchCollectionStart(){

    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fectchCollectionAsync
    )

}