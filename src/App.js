import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Photo from "./components/photo.js";

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