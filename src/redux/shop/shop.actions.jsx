import ShopActionTypes from './shop.typs'
import { firestore ,converCollectionToMap } from '../../firebase/firebase.utils'


export const fetchCollectionsStart = () => ({
    type:ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = collectionsMap => ({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})


export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collection')
        dispatch(fetchCollectionsStart())


        collectionRef.get().then(async snapshot => {
            const collectionsMap = converCollectionToMap(snapshot)
            dispatch(fetchCollectionsSuccess(collectionsMap))
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}
