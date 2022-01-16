import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalState } from '../utils/stateContext';

export default function NavBar({toggle}) {
  const {store} = useGlobalState();
  const {signedInUser} = store;

  // function handleLogOut() {
  //   dispatchEvent({type:"removeSignedInUser"})
  //   dispatchEvent({type:"removeJWT"})
  // }

  return (
    <nav className='nav-bar' role='navigation'>
      <NavLink className="pl-8 picnic-vic" to="/">Picnic Victoria</NavLink>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div className="flexpr-8 md:block hidden">
        <NavLink className="nav-links p-4" to="/">Map</NavLink>
        <NavLink className="nav-links p-4" to="/parks">List</NavLink>
        <NavLink className="nav-links p-4" to="/about">About</NavLink>
        
        {signedInUser ?
          (<NavLink className="nav-links p-4" to="/">Sign Out</NavLink>)
        :
          (<NavLink className="nav-links p-4" to="/auth/signin">Sign In</NavLink>)
        }
        
        <span>| Hello, {signedInUser || "guest"}</span>
      </div>
      
    </nav>
  )
}
