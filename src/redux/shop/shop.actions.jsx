import ShopActionTypes from './shop.typs'



export const updateCollections = (collectionsMap) => ({
    type:ShopActionTypes.UPDATE_COLLECTION,
    payload:collectionsMap
})