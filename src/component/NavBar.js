import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalState } from '../utils/stateContext';

export default function NavBar({toggle}) {
  const {store} = useGlobalState();
  const {loggedInUser} = store;
  return (
    <nav className='nav-bar' role='navigation'>
      <NavLink className="pl-8" to="/">Picnic Victoria</NavLink>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <NavLink className="p-4" to="/">Map</NavLink>
        <NavLink className="p-4" to="/parks">List</NavLink>
        <NavLink className="p-4" to="/about">About</NavLink>
        <NavLink className="p-4" to="/signin">Sign In</NavLink>
        <span>| Hello {loggedInUser || "guest"}</span>
      </div>
      
    </nav>
  )
}
