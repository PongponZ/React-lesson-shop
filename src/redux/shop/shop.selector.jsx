import { createSelector } from 'reselect'

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)


export const selectCollectionsItem = collectionsUrlParam => 
    createSelector(
        [selectCollections],
        collections => collections ? collections[collectionsUrlParam] : null
    )

export const selectCollectionsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)