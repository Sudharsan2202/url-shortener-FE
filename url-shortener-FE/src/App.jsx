import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Auth/Login';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Auth/Register';
import ForgotPassword from './Auth/ForgotPassword';
import ResetPassword from './Auth/ResetPassword';
import Dashboard from './components/DashBoard';
import ActivateAccount from './Auth/ActivateAccount';
import UrlStats from './components/UrlStats';
import UrlList from './components/UrlList';
import Home from './Auth/Home';

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
        <Route path="/" element={<Home />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/activate/:token" element={<ActivateAccount />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/url-stats" element={<UrlStats />} />
          <Route path="/url-list" element={<UrlList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

 

  