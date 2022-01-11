import React from 'react'
import { NavLink } from 'react-router-dom'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <div className={isOpen? 'dropdown': 'hidden'}>
          <NavLink className="p-4" to="/">Map</NavLink>
          <NavLink className="p-4" to="/parks">List</NavLink>
          <NavLink className="p-4" to="/about">About</NavLink>
          <NavLink className="p-4" to="/signin">Sign In</NavLink>
        </div>
    )
}

export default Dropdown
