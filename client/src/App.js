import React from 'react'
import './App.css';
import HomePage from './Pages/homepage';
import PageTwo from './Pages/pagetwo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function App() {
  
  return (
    <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/listing/:id" element={<PageTwo />} />
          </Routes>
    </Router>

    
  )
}
 



