import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <ul>
        <li><NavLink to="/">Picnic Victoria</NavLink></li>
        <li><NavLink to="/">Map</NavLink></li>
        <li><NavLink to="/">List</NavLink></li>
        <li><NavLink to="/">About</NavLink></li>
        <li><NavLink to="/">Sign In</NavLink></li>  
      </ul>
      
    </div>
  )
}
