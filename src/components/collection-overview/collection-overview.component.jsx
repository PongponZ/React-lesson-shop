import React from 'react';
import './collection-overview.style.scss'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import PreviewCollection from '../preview-collection/preview-collection.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';


const CollectionOverview = ({ collections }) => (
    
    <div className='collections-overview'>
        {
            collections.map(({id,...otherCollectionProps}) => (
                <PreviewCollection key={id} {...otherCollectionProps}/>
                ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})



export default connect(mapStateToProps)(CollectionOverview)