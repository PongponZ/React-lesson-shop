import React from 'react'
import './cart-dropdown.style.scss'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


const CartDropdown = ({ cartItems , history}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map( cartItems =>( 
                <CartItem  key={cartItems.id} item={cartItems}/>))
                :
                <span className = 'empty-message'>Your cart is empty</span>
            }
           
        </div>
        <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapSateToProps = state => ({
    cartItems: selectCartItems(state)
})

 export default withRouter(connect(mapSateToProps)(CartDropdown)) 