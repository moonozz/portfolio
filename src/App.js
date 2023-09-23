// import './App.css';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/p/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
