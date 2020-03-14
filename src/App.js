import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/hompage.component';
import {Switch, Route,Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignPage from './pages/signIn-and-signUp/signIn-and-signUp.component';

import { connect } from 'react-redux'
import { selecCurrentUser } from './redux/user/user.selector'
import { createStructuredSelector } from 'reselect'
import CheckoutPage from './pages/checkout/checkout.components';

import { checkUserSession } from './redux/user/user.action'
class App extends Component {

  
  unsubscribeFromAuth = null;

  componentDidMount(){
    const { checkUserSession } = this.props
    checkUserSession()
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth()
 
  }


  render(){
    return (
      <div> 
          <Header/>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage}/>
            <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignPage/>) }/>
          </Switch>

      </div>
    );
  }
}




const maptoStateToProps = createStructuredSelector ({
  currentUser: selecCurrentUser
})

const maptoDistchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})
export default connect(maptoStateToProps, maptoDistchToProps)(App);
