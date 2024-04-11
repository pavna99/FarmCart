import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IntroPage, LoadingPage, SignupPage,LocationPage, LoginPage, Dashboard, Seemore, SearchPage, Expandpage, EmptyCart, CartPage,CheckoutPage, AddressPage,Checkout, Orderplace ,Notification, EmptyNotification, Profile} from './containers';
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
          <Route path="/expand" exact element={<Expandpage/>} />
          <Route path="/empty" exact element={<EmptyCart/>} />
          <Route path="/cart" exact element={<CartPage/>} />
          <Route path="/checkoutpage" exact element={<CheckoutPage/>}/>
          <Route path="/checkoutpage/address" exact element={<AddressPage/>}/>
          <Route path="/checkout" exact element={<Checkout/>}/>
          <Route path="/checkout/ordersucess" exact element={<Orderplace/>}/>
          <Route path="/notification" exact element={<Notification/>}/>
          <Route path="/profile" exact element={<Profile/>}/>
          <Route path="/nonotification" exact element={<EmptyNotification/>}/>

        </Routes>
      </Router>
    </AuthProvider>

  );
};

export default App;


