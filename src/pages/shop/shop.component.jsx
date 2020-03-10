import React from 'react';
import './shop.style.scss'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import { Route } from 'react-router-dom';
import CategoryPage from '../category/category.component';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {selectCollectionsFetching , selectCollectionsLoaded} from '../../redux/shop/shop.selector'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CategoryPage)

class ShopPage extends React.Component{

    componentDidMount(){
        const { fetchCollectionsStart } = this.props
        fetchCollectionsStart();
    }


    render(){
        const { match, isCollectionFetching,isCollectionLoaded } = this.props
        return(
            <div className='shop-page'>
                <Route 
                exact 
                path={`${match.path}`} 
                render={ props => (
                    <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
                )}
                />
                <Route path={`${match.path}/:categoryId`} render={props => (<CollectionPageWithSpinner isLoading={ !isCollectionLoaded } {...props} />)} />
            </div>
        )
    }
} 

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectCollectionsFetching,
    isCollectionLoaded: selectCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)