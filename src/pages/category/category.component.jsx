import React from 'react'
import './category.style.scss'
import { selectCollectionsItem } from '../../redux/shop/shop.selector'
import { connect } from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item.component'


const CategoryPage = ({collection}) => {
    const { title, items } = collection
    return(
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(items => <CollectionItem key={items.id} item={items}/>)
                }
                
            </div>
        </div>
       
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection:selectCollectionsItem(ownProps.match.params.categoryId)(state)
})


export default connect(mapStateToProps)(CategoryPage) 