import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Wip from './pages/Wip';
import About from './pages/About';
import { HashRouter } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <HashRouter>
      <Route exact path="/about" component={About}>
      </Route>
      <Route exact path="/" component={Wip}>
      </Route>
    </HashRouter>
  );
}

export default App;
