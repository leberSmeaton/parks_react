import React from 'react';

export default function Footer() {
  return (
    <div className="footer">
      
      <a href="https://github.com/PicnicVic">
        <img className='github-img' src={process.env.PUBLIC_URL + '/github-icon.png'} alt="melbourne google map" />
      </a>
      <p>Copyright 2021 Picnic Victoria All rights reserved.</p>
    </div>
  )
}
