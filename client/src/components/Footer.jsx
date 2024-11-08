import React from 'react'

export default function Footer() {
  return (
    <div style={{ 

      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '0px 10px', 
      backgroundColor: 'silver'}}>
    
          <div style={{ display: 'flex', gap: '40px', padding: '10px', backgroundColor:"silver" }}>
              <p><strong>© 2024 Airbnb, Inc.</strong></p>
              <p>.  Privacy Policy</p>
              <p>.  Terms</p>
              <p>.  Sitemap</p>
              <p>.  Your Privacy Policies </p>
          </div>
    
          <div style={{ display: 'flex', gap: '20px' }}>
              <img src= {require("../Images/facebook.png")} alt="Facebook" className='fb'/>
              <img src= {require("../Images/instagram.png")} alt="Instgram" className='ins'/>
          </div>

    </div>
  )
}
