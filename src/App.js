// import './App.css';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DevPerpett from './pages/DevPerpett';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dev-perpett" element={<DevPerpett />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
