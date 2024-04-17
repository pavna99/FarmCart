import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import { IntroPage, LoadingPage, SignupPage,LocationPage, LoginPage, Dashboard,Seemore, Search,Expandpage,FarmerSignupPage} from './containers';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LoadingPage />} />
        <Route path="/introduction" exact element={<IntroPage />} />
        <Route path="/signup" exact element={<SignupPage />} />
        <Route path="/Farmersignup" exact element={<FarmerSignupPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/location" exact element={<LocationPage/>} />
        <Route path="/dashboard" exact element={<Dashboard/>} />
        <Route path="/seemore" exact element={<Seemore/>} />
        <Route path="/search" exact element={<Search/>} />
        <Route path="/expand" exact element={<Expandpage/>} />
      </Routes>
    </Router>
=======
import { IntroPage, LoadingPage, SignupPage,LocationPage, LoginPage, Dashboard, Seemore, SearchPage, Expandpage, EmptyCart, CartPage,CheckoutPage, AddressPage,Checkout, Orderplace ,Notification, EmptyNotification, ChatPage, Profile, FarmerDashboard, ProductDetail} from './containers';
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
          <Route path="/ordersuccess" exact element={<Orderplace/>}/>
          <Route path="/notification" exact element={<Notification/>}/>
          <Route path="/profile" exact element={<Profile/>}/>
          <Route path="/nonotification" exact element={<EmptyNotification/>}/>
          <Route path="/chat" exact element={<ChatPage/>} />
          <Route path="/farmdash" exact element={<FarmerDashboard/>}/>
          <Route path="/addproduct" exact element={<ProductDetail/>}/>
        </Routes>
      </Router>
    </AuthProvider>

>>>>>>> 61d344d00d8f249f59f57926769d1cb8ae4cd048
  );
};

export default App;


