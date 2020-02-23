import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './css/style.css';
import StorePicker from './components/StorePicker';
import App from './components/App';
import NotFound from './components/NotFound';

const repo = `/${window.location.pathname.split('/'[1])}`;

const Root = () => {
  return(

      <Router basename={repo}>
        <Switch>
          <Route exact path="/" component={StorePicker} />
          <Route path="/store/:storeId" component={App} />
          <Route component={NotFound} />
        </Switch>
      </Router>
  )
}

render(<Root />, document.querySelector('#main'));


/* */
