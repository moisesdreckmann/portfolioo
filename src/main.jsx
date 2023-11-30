import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Front from './pages/Front.jsx';
import Back from './pages/Back.jsx';
import Conquistas from './pages/Conquistas.jsx';
import Home from './pages/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/front-end" element={<Front />} />
      <Route path="/back-end" element={<Back />} />
      <Route path="/conquistas" element={<Conquistas />} />
    </Routes>
  </Router>,
);

