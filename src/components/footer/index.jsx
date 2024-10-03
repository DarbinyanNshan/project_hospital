import React from "react";
import "./style.css";

export const  Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h4>Karlen Yesayani anvan poliklinika </h4>
          <p>We are dedicated to providing the best healthcare services with a team of expert doctors and state-of-the-art facilities.</p>
        </div>
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@hospital.com</p>
          <p>Address: 123 Health St, Medical City</p>
        </div>
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Hospital Name | All Rights Reserved</p>
      </div>
    </footer>
  );
};
