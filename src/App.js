import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './themeProvider'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Photo} from "./components/Photo.js";
import Letter from "./components/Letter.js";


export function App() {
    return (
        <div className="App">
        <ThemeProvider>
            <Routes>
                <Route path="/" element={<Letter />} />
                <Route path="/photo" element={<Photo />} />
                {/* <Route path="/contact" element={Contact} />
                <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </ThemeProvider>
    </div>
    );
};

import { BrowserRouter  } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('app')
);

export default App;