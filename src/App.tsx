import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/headers/header'; // Certifique-se de que o caminho esteja correto
import Card from './components/cards/card';
import Footer from './components/footer/footer'; // Certifique-se de que o caminho esteja correto
import './App.css';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Card />
      <Footer />
    </div>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
