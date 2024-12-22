import React from 'react';
import '../footer.css'; // Import the corresponding CSS file

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-sections">
        <div className="footer-column">
          <h5>Support</h5>
          <p>Help Center</p>
          <p>AirCover</p>
          <p>Anti-discrimination</p>
          <p>Disability support</p>
          <p>Cancellation options</p>
          <p>Report neighborhood concern</p>
        </div>
        <div className="footer-column">
          <h5>Hosting</h5>
          <p>Airbnb your home</p>
          <p>AirCover for Hosts</p>
          <p>Hosting resources</p>
          <p>Community forum</p>
          <p>Hosting responsibly</p>
          <p>Airbnb-friendly apartments</p>
          <p>Join a free Hosting class</p>
          <p>Find a co-host</p>
        </div>
        <div className="footer-column">
          <h5>Airbnb</h5>
          <p>Newsroom</p>
          <p>New features</p>
          <p>Careers</p>
          <p>Investors</p>
          <p>Gift cards</p>
          <p>Airbnb.org emergency stays</p>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-left">
          <p>© 2024 Airbnb, Inc.</p>
          <p>Terms</p>
          <p>Sitemap</p>
          <p>Privacy</p>
          <p>Your Privacy Choices</p>
        </div>
        <div className="footer-right">
          <p>English (US)</p>
          <p>$ USD</p>
          <img src={require('../Images/facebook.png')} alt="Facebook" />
          <img src={require('../Images/twitter.png')} alt="Twitter" />
          <img src={require('../Images/instagram.png')} alt="Instagram" />
        </div>
      </div>
    </div>
  );
}
