// src/app.js
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// CSS dosyalarını içe aktar
import './assets/css/main.css';
import './assets/css/templates.css';
import './assets/css/pricing.css';
import './assets/css/auth.css';
import './assets/css/dashboard.css';
import './assets/css/contact.css';
import './assets/css/features.css';

// Layout ve sayfa bileşenlerini içe aktarın
import Layout from './components/Layout';
import Home from './components/pages/Home';
import Templates from './components/pages/Templates';
import Pricing from './components/pages/Pricing';
import Features from './components/pages/Features';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Dashboard from './components/pages/Dashboard';

document.addEventListener('DOMContentLoaded', () => {
  // Tüm uygulama için AOS'u bir kez başlat
  AOS.init({
    duration: 1000,
    once: true,
    offset: 120,
    easing: 'ease-in-out'
  });

  ReactDOM.render(
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>,
    document.getElementById('app')
  );
});