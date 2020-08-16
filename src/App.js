import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Photo} from "./components/Photo.js";


export function App() {
    return (
        <Router>
          <Route exact path="/" component={Photo} />
          {/* <Route path="/edit/:id" component={EditExercise} />
          <Route path="/contact" component={Contact} />
           */}
        </Router>
    );
};
ReactDOM.render(<App />, document.getElementById('photoSVG'));
export default App;