import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/index.scss';
import Accueil from './pages/accueil';
import Header from './components/header';
import Footer from './components/footer';
import Apropos from './pages/apropos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
