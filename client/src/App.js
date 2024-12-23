import React from 'react'
import './App.css';
import HomePage from './Pages/homepage';
import PageTwo from './Pages/pagetwo';
import SignUpPage from './Pages/Signuppage';
import LoginPage from './Pages/Loginpage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
  
  return (
    <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/listing/:id" element={<PageTwo />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            
          </Routes>
    </Router>

    
  )
}
 



