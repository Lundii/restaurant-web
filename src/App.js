import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header';
import Restaurant from './pages/restaurant';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Header />
      <div style={{marginTop: '59px'}}>
        <Switch>
          <Route exact path="/restaurant-web" component={Home} />
          <Route path="/restaurant-web/restaurant/:id" component={Restaurant} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
