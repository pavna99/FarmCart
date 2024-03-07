import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IntroPage, LoadingPage, SignupPage } from './containers';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoadingPage />} />
        <Route path="/loading" exact element={<IntroPage />} />
        <Route path="/signup" exact element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default App;


