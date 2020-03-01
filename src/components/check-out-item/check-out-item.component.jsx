import React from 'react'
import './check-out-item.style.scss'
import { connect } from 'react-redux'
import { clearItemFromCart , removeItem , addItem} from '../../redux/cart/cart.action'


const CheckoutItem = ( { cartItems , clearItems,addItem, removeItem}) =>{
    const {imageUrl,name,quantity,price} = cartItems
    return(
        <div className = 'checkout-item'>
            <div className ='image-container'> 
                <img src ={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItems)}>&#10094;</div>
                <span className ='value'>{quantity}</span>  
                <div className='arrow' onClick={() => addItem(cartItems)}>&#10095;</div> 
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItems(cartItems)}>
                &#10005;
            </div>
    
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    clearItems: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem:item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)