import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/hompage.component';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignPage from './pages/signIn-and-signUp/signIn-and-signUp.component';
import { auth , creacteUserProfileDocument } from './firebase/firebase.utils'



class App extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      currentUser:null
    }

  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await creacteUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot =>{
          this.setState({
            currentUser:{
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
       
      }
      this.setState({currentUser:userAuth})
      console.log(userAuth)
    })
  }


  componentWillUnmount(){
    this.unsubscribeFromAuth()
 
  }


  render(){
    return (
      <div> 
        <BrowserRouter>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/signin' component={SignInAndSignPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
