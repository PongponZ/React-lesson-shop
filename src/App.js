import React from 'react';
import './App.css';
import Homepage from './pages/homepage/hompage.component';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignPage from './pages/signIn-and-signUp/signIn-and-signUp.component';




function App() {
  return (
    <div> 
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
