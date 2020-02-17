import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './css/style.css';
import StorePicker from './components/StorePicker';
import App from './components/App';
import NotFound from './components/NotFound';

const Root = () => {
  return(

      <Router>
        <Switch>
          <Route exact path="/">
            <StorePicker />
          </Route>
          <Route exact path="/store/:storeID">
            <App />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
  )
}

render(<Root />, document.querySelector('#root'));


/* */
