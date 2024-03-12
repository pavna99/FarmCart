import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IntroPage, LoadingPage, SignupPage,SecondPage,LocationPage,LoginPage } from './containers';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoadingPage />} />
        <Route path="/loading" exact element={<IntroPage />} />
        <Route path="/signup" exact element={<SignupPage />} />
        <Route path="/second" exact element={<SecondPage/>} />
        <Route path="/location" exact element={<LocationPage/>} />
        <Route path="/login" exact element={<LoginPage/>} />
      </Routes>
    </Router>
  );
};

export default App;


