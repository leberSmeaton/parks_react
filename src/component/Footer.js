import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <ul>
        <li><Link to='www.facebook.com'>Faceboook</Link></li>
        <li><Link to='www.medium.com'>Medium</Link></li>
        <li><Link to='www.twitter.com'>Twitter</Link></li>
      </ul>
      
      <ul>
        <li><Link to='https://github.com/PicnicVic'>Git Repo</Link></li>
        <li>Team on LinkedIn: <Link to="/">Karla T</Link>, <Link to="/">Matt L</Link>, <Link to="/">Ruilai Z</Link>, <Link to='https://www.linkedin.com/in/bella-leber-smeaton/'>Bella LS</Link></li>
      </ul>
    </div>
  )
}
