import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import movies from './components/movies';


function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/gallery"  component={Gallery} />
        <Route path="/movies"  component={movies} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
