import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <Link to='www.facebook.com'>Facebook</Link>
      <Link to='www.medium.com'>Medium</Link>
      <Link to='www.twitter.com'>Twitter</Link>
      <Link to='https://github.com/PicnicVic'>Git Repo</Link>
      Team on LinkedIn: <Link to="/">Karla T</Link>, <Link to="/">Matt L</Link>, <Link to="/">Ruilai Z</Link>, <Link to='https://www.linkedin.com/in/bella-leber-smeaton/'>Bella LS</Link>
      <p>Copyright 2021 Picnic Victoria All rights reserved.</p>
    </div>

    // <div>
    //   <ul>
    //     <li></li>
    //     <li></li>
    //     <li></li>
    //   </ul>
      
    //   <ul>
    //     <li></li>
    //     <li></li>
    //   </ul>
    // </div>
  )
}
