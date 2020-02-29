import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/hompage.component';
import {BrowserRouter,Switch, Route,Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignPage from './pages/signIn-and-signUp/signIn-and-signUp.component';
import { auth , createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import {setCurrentUser} from './redux/user/user.action'

class App extends Component {

  
  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
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
    });
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth()
 
  }


  render(){
    return (
      <div> 
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignPage/>) }/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const maptoStateToProps = ({user}) => ({
  currentUser:user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(maptoStateToProps,mapDispatchToProps)(App);
