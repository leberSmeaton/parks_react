import React from 'react';
import {Link} from 'react-router-dom';

export default function SignIn() {
  return (
    <>
      <section>
        <h2>Sign In</h2>
        <div>
          <img src={process.env.PUBLIC_URL + '/park_image1.jpg'} alt="melbourne google map" style={{ width: '100%' }} />
          <form>

          </form>
        </div>
      </section>
      <h2><Link to="/">Create an account</Link></h2>
    </>
  )
}
