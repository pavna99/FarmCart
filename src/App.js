import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import { IntroPage, LoadingPage, SignupPage,LocationPage, LoginPage } from './containers';
=======
import { IntroPage, LoadingPage, SignupPage,SecondPage,LocationPage,LoginPage } from './containers';
>>>>>>> e156070b424283d764a3ebf7a2926446cf1b7124


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoadingPage />} />
        <Route path="/introduction" exact element={<IntroPage />} />
        <Route path="/signup" exact element={<SignupPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/location" exact element={<LocationPage/>} />
        <Route path="/login" exact element={<LoginPage/>} />
      </Routes>
    </Router>
  );
};

export default App;


