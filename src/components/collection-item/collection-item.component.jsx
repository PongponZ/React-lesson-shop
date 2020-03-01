import React from 'react'
import './collection-item.style.scss'
import CustomButton from '../custom-button/custom-button.component'
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.action'

const CollectionItem = ({item,addItem}) => {
    const {name,price,imageUrl} = item;
    return(
    <div className='collection-item'>
        <div className='image' 
            style={{backgroundImage:`url(${imageUrl})`}}>
        </div>
        <div className='collection-footer'>
            <span>{name}</span>
            <span>{price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
    </div>)
}

const mapDispatchToProps = dispath =>({
    addItem: item => dispath(addItem(item))
})
export default connect(null,mapDispatchToProps)(CollectionItem)