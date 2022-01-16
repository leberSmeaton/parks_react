import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      
      <Link to='https://github.com/PicnicVic'><img className='github-img' src={process.env.PUBLIC_URL + '/github-icon.png'} alt="melbourne google map" /></Link>
      {/* Team on LinkedIn: <Link to="/">Karla T</Link>, <Link to="/">Matt L</Link>, <Link to="/">Ruilai Z</Link>, <Link to='https://www.linkedin.com/in/bella-leber-smeaton/'>Bella LS</Link> */}
      <p>Copyright 2021 Picnic Victoria All rights reserved.</p>
    </div>
  )
}
