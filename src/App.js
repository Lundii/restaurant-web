import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/header';
import Restaurant from './pages/restaurant';
import Home from './pages/home';

function App() {
  return (
    <Router basename="/">
      <Header />
      <div style={{marginTop: '59px'}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/restaurant/:id" component={Restaurant} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
