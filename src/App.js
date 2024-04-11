import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IntroPage, LoadingPage, SignupPage,LocationPage, LoginPage, Dashboard, Seemore, SearchPage, Expandpage, EmptyCart, CartPage,CheckoutPage, AddressPage,Checkout } from './containers';
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
          <Route path="/search" exact element={<SearchPage/>} />
          <Route path="/expand/:product_id" exact element={<Expandpage/>} />
          <Route path="/empty" exact element={<EmptyCart/>} />
          <Route path="/cart" exact element={<CartPage/>} />
          <Route path="/checkoutpage" exact element={<CheckoutPage/>}/>
          <Route path="/address" exact element={<AddressPage/>}/>
          <Route path="/checkout" exact element={<Checkout/>}/>
        </Routes>
      </Router>
    </AuthProvider>

  );
};

export default App;


