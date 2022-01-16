import React from 'react'
import { NavLink } from 'react-router-dom'
import { useGlobalState } from '../utils/stateContext';

const Dropdown = ({isOpen, toggle}) => {
  const {store} = useGlobalState();
  const {signedInUser} = store;
  
  return (
    <div className={isOpen? 'dropdown': 'hidden'}>
      <NavLink className="drop-links p-4" to="/">Map</NavLink>
      <NavLink className="drop-links flexp-4" to="/parks">List</NavLink>
      <NavLink className="drop-links tablep-4" to="/about">About</NavLink>
      {/* <NavLink className="p-4" to="/auth/signin">Sign In</NavLink> */}
      {signedInUser ?
        (<NavLink className="drop-links p-4" to="/">Sign Out</NavLink>)
      :
        (<NavLink className="drop-links p-4" to="/auth/signin">Sign In</NavLink>)
      }
      <span>| Hello {signedInUser || "guest"}</span>
    </div>
  )
}

export default Dropdown
