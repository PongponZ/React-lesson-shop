import React from 'react';
import {toggleCartHidden} from '../../redux/cart/cart.action'
import './cart-icon.style.scss'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import {ReactComponent as Shoppinglogo} from '../../asset/shopping-bag.svg'
import { connect } from 'react-redux';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <Shoppinglogo className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden:() => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})


export default connect(mapStateToProps,mapDispatchToProps)(CartIcon) 