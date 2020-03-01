import React from 'react'
import {Link} from 'react-router-dom'
import './header.style.scss'
import { ReactComponent as Logo} from '../../asset/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect'
import { selecCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selectors'


const Header = ({currentUser,hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>)
                : (<Link className='option' to='/signin'>SIGN IN</Link>
            )}
            <CartIcon/>
        </div>
        {
            hidden ?
            <CartDropdown />
            :null}
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selecCurrentUser,
    hidden:selectCartHidden
})



export default connect(mapStateToProps)(Header) 