import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style/index.scss';
import Accueil from './pages/accueil';
import Header from './components/header';
import Footer from './components/footer';
import Apropos from './pages/apropos';
import Fichelogement from './pages/fichelogement';
import Notfound from './pages/404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/fichelogement" element={<Fichelogement />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
