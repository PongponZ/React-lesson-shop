import React from 'react'
import { connect} from 'react-redux'

import { ReactComponent as Logo} from '../../asset/crown.svg'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { createStructuredSelector } from 'reselect'
import { selecCurrentUser } from '../../redux/user/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { signOutStart } from '../../redux/user/user.action'

import {HeaderContainer, LogoContainer, OptionLink , OptionDiv, OptionsContainer} from './header.styles'

const Header = ({currentUser, hidden, signOutStart}) => (
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
                currentUser ? (<OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>)
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

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header) 