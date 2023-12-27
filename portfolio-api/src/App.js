import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavBar from './pages/home/NavBar';
import Home from './pages/home/homescreen';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element ={<Home />}></Route>
            <Route path="*" element ={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
