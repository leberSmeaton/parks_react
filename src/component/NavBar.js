import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <ul>
        <li><NavLink to="/">Picnic Victoria</NavLink></li>
        <li><NavLink to="/">Map</NavLink></li>
        <li><NavLink to="/list">List</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/signin">Sign In</NavLink></li>  
      </ul>
      
    </div>
  )
}
