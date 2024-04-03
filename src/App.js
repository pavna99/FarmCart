import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IntroPage, LoadingPage, SignupPage,LocationPage, LoginPage, Dashboard, Seemore, SearchPage, Expandpage, EmptyCart } from './containers';
import { AuthProvider } from './components/Auth/AuthContext';



const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<LoadingPage />} />
          <Route path="/introduction" exact element={<IntroPage />} />
          <Route path="/signup" exact element={<SignupPage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/location" exact element={<LocationPage/>} />
          <Route path="/dashboard" exact element={<Dashboard/>} />
          <Route path="/seemore" exact element={<Seemore/>} />
          <Route path="/searchpage" exact element={<SearchPage/>} />
          <Route path="/expand" exact element={<Expandpage/>} />
          <Route path="/empty" exact element={<EmptyCart/>} />
        </Routes>
      </Router>
    </AuthProvider>

  );
};

export default App;


