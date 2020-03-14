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

class App extends Component {

  
  unsubscribeFromAuth = null;

  componentDidMount(){
  //  const { setCurrentUser} = this.props;

    /* this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot =>{
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          });
        });
      }
      
      setCurrentUser(userAuth);
      
    }); */
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
  currentUser: selecCurrentUser,

})


export default connect(maptoStateToProps)(App);
