import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import {BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';
import AboutPage from './landing_page/about/AboutPage';
import PricingPage from './landing_page/pricing/PricingPage';
import ProductPage from './landing_page/products/ProductPage';
import SignUpPage from './landing_page/signup/SignUpPage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
import AccountLoginPage from './accountLogin/AccountLoginPage';
import ProfilePage from './profile/profilePage';

const rootElement = document.getElementById('root');
if (rootElement !== null) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/price' element={<PricingPage/>}></Route>
        <Route path='/products' element={<ProductPage/>}></Route>
        <Route path='/signup' element={<SignUpPage/>}></Route>
        <Route path='/support' element={<SupportPage/>}></Route>
        <Route path='/accountLogin' element={<AccountLoginPage/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}


