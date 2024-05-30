import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App'; // Assuming App.js is your main component
import Home from './pages/Home'; // Assuming Home.js is your home component
import Contact from './pages/Contact/Contact'; // Assuming Contact.js is your contact component

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      {/* <Route path="*" component={() => <div>404 Not Found</div>} /> */}
    </Switch>
  </Router>,
  document.getElementById('root')
);
