import React from 'react'
import './checkout.style.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { selectCartTotal } from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/check-out-item/check-out-item.component'

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItems =>(
                <CheckoutItem key={cartItems.id} cartItems={cartItems}  />
            ))
        }
        <div className='total'>Total:{total}</div>
    </div>
)

const mapSatetoProps = createStructuredSelector({
    cartItems:selectCartItems,
    total: selectCartTotal
})

export default  connect(mapSatetoProps)(CheckoutPage) 