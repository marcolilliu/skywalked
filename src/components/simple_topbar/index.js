import React from 'react'
import logo from './assets/logo.svg'
import './main.css'

/* Topbar */
function SimpleTopbar() {
  return (
    <div className="Topbar">
      <img src={logo} className="Topbar-logo" alt="Star Wars logo" />
    </div>
  );
}
  
export default SimpleTopbar