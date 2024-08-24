import React from 'react';
import './style.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/path/to/logo.png" alt="Hospital Logo" />
        <span>Hospital Name</span>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li className="departments-dropdown">
          <a href="/departments">Departments</a>
          <ul className="dropdown-content">
            <li><a href="/departments/cardiology">Cardiology</a></li>
            <li><a href="/departments/neurology">Neurology</a></li>
            <li><a href="/departments/orthopedics">Orthopedics</a></li>
            <li><a href="/departments/pediatrics">Pediatrics</a></li>
            <!-- Add more departments as needed -->
          </ul>
        </li>
        <li><a href="/doctors">Doctors</a></li>
        <li><a href="/appointments">Appointments</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
      <div className="navbar-right">
        <input type="text" placeholder="Search..." />
        <button className="emergency-btn">Emergency</button>
        <div className="language-switcher">
          <select>
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="am">AM</option>
          </select>
        </div>
        <a href="/login">Login/Sign Up</a>
      </div>
    </nav>
  );
}

export default NavBar;
