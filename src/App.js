import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Dev1 from './pages/Dev1';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dev1" element={<Dev1 />} />
      </Routes>
    </div>
  );
}

export default App;
