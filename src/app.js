// src/app.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// CSS dosyalarını içe aktar
import './assets/css/main.css';
import './assets/css/templates.css';
import './assets/css/pricing.css';
import './assets/css/auth.css';  // Yeni eklenen 
import './assets/css/dashboard.css';  // Yeni eklenen
import './assets/css/contact.css';  // Yeni eklenen

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