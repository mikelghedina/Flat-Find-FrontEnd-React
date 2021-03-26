import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Research from "./components/Research/Research";
import AboutUs from "./components/AboutUs/AboutUs";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Router>
            <Switch>
                <Route exact path='/'><Home/></Route>
                <Route exact path='/research'><Research/></Route>
                <Route exact path='/aboutus'><AboutUs/></Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
