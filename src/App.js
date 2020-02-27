import React from 'react';
import './App.css';
import Homepage from './pages/homepage/hompage.component';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route  path='/shop' component={ShopPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
