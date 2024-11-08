import React from 'react'
import Header from './components/Header'
import './App.css';
import Footer from './components/Footer';
import Card from './components/card';


export default function App() {
  return (
    <div>
      <Header/>
      <div className='row'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Footer/>
    </div>
  )
}
 



