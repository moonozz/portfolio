// import './App.css';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Perpett from './pages/Dev/Perpett';
import Poopoo from './pages/Dev/Poopoo';
import DarkTODO from './pages/Dev/DarkTodo';
import NomadTODO from './pages/Dev/NomadTodo';
import Geeks from './pages/Des/Geeks';
import Yellee from './pages/Des/Yellee';
import Idus from './pages/Des/Idus';
import Dokrip from './pages/Des/Dokripwoondong';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/p/1" element={<Perpett />} />
        <Route path="/p/2" element={<Poopoo />} />
        <Route path="/p/3" element={<DarkTODO />} />
        <Route path="/p/4" element={<NomadTODO />} />
        <Route path="/p/5" element={<Geeks />} />
        <Route path="/p/6" element={<Yellee />} />
        <Route path="/p/7" element={<Idus />} />
        <Route path="/p/8" element={<Dokrip />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
