import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IntroPage, LoadingPage, SignupPage,LocationPage, LoginPage, Dashboard,Seemore, SearchPage,Expandpage} from './containers';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoadingPage />} />
        <Route path="/introduction" exact element={<IntroPage />} />
        <Route path="/signup" exact element={<SignupPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/location" exact element={<LocationPage/>} />
        <Route path="/dashboard" exact element={<Dashboard/>} />
        <Route path="/seemore" exact element={<Seemore/>} />
        <Route path="/search" exact element={<SearchPage/>} />
        <Route path="/expand" exact element={<Expandpage/>} />
      </Routes>
    </Router>
  );
};

export default App;


