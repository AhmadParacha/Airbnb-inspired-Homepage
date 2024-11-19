import React from 'react'
import Header from './components/Header'
import './App.css';
import Footer from './components/Footer';
import IconBar from './components/Iconbar';
import Card from './components/card';

export default function App() {
  return (
    <div>
      <div>
      <Header/>
      </div>
      <div>
      <IconBar/>
      </div>
      
      
      <div className='row'>      
        <Card/>
      </div>
      <div>
          <Footer/>
      </div>
      
    </div>
  )
}
 



