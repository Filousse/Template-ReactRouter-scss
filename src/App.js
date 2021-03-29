import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./pages/Home";
import Router from './pages/Router';
import NavigationLearning from './pages/NavigationLearning';
import Sass from './pages/Sass';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/router" component={Router} exact />
            <Route path="/navigation" component={NavigationLearning} exact />
            <Route path="/sass" component={Sass} exact />

            <Route  component={NotFound} />
      </Switch>
    </BrowserRouter>
      
  );
};

export default App;
