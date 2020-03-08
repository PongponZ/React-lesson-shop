import React from 'react';
import './shop.style.scss'
import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import { Route } from 'react-router-dom';
import CategoryPage from '../category/category.component';
import { firestore ,converCollectionToMap } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CategoryPage)

class ShopPage extends React.Component{

    state = {
        loading:true
    }



    unsubscribeFromSnapshot = null;
    componentDidMount(){
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collection')
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = await converCollectionToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({loading:false})
        })
    }


    render(){
        const { match } = this.props
        const { loading } = this.state
        return(
            <div className='shop-page'>
                <Route 
                exact 
                path={`${match.path}`} 
                render={ props => (
                    <CollectionOverviewWithSpinner isLoading={loading} {...props} />
                )}
                />
                <Route path={`${match.path}/:categoryId`} render={props => (<CollectionPageWithSpinner isLoading={loading} {...props} />)} />
            </div>
        )
    }
} 

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})


export default connect(null, mapDispatchToProps)(ShopPage)