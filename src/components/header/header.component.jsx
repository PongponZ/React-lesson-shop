import React from 'react'

import { ReactComponent as Logo} from '../../asset/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect'
import { selecCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selectors'


import {HeaderContainer, LogoContainer, OptionLink , OptionDiv, OptionsContainer} from './header.styles'

const Header = ({currentUser,hidden}) => (
    <HeaderContainer>

        <LogoContainer to='/'>
            <Logo/>
        </LogoContainer>

        <OptionsContainer>

            <OptionLink to='/shop'>
                SHOP
            </OptionLink>

            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>

            {
                currentUser ? (<OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>)
                : (<OptionLink to='/signin'>SIGN IN</OptionLink>
            )}

            <CartIcon/>
            
        </OptionsContainer>
        {
            hidden ?
            <CartDropdown />
            :null}
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selecCurrentUser,
    hidden:selectCartHidden
})



export default connect(mapStateToProps)(Header) 