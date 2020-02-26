import React from 'react';
import './App.css';
import Homepage from './pages/homepage/hompage.component';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

const NoteFoundPage = () =>(
  <div>
    NoteFoundPage
  </div>
);



function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/hats' component={HatsPage} />
          <Route path='/NotFound' component={NoteFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
