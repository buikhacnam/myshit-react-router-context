import React from 'react';
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import Home from './Home';
import Poster from './Poster';
import Title from './Title';


function App() {
  
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/poster" component={Poster} />
      <Route exact path="/title" component={Title} />
    </Switch>
  );
}

export default App;
