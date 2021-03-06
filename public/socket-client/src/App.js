import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

//import components
import Loading from './components/Loading';
import Home from './components/Home';
import Room from './components/Room';

function App() {
  return (
    <Router>
      <Suspense fallback={Loading}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/rooms" component={Room}/>
          <Route path="/rooms/:id" component={Room}/>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
