import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import {kake} from './main.js';
console.log('photo is running for react');

import Photo from "./components/photo.js";
// console.log('Photo:', Photo)

function App() {
    return (
      <Router>
        <Route path="/" exact component={Photo} />
        {/* <Route path="/edit/:id" component={EditExercise} />
        <Route path="/contact" component={Contact} />
        <Route path="/user" component={CreateUser} /> */}
      </Router>
    );
  }

export default App;