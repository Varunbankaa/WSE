import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Reservation from './pages/Reservation';
import Tables from './pages/Tables';
import Guests from './pages/Guests';
import AdminDashboard from './pages/AdminDashboard';
import Menu from './pages/Menu';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Stats from './pages/Stats';
import OrderOnline from './pages/OrderOnline';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/guests" element={<Guests />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/orderonline" element={<OrderOnline />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
