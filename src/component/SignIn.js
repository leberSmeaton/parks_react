import React from 'react';
import {Link} from 'react-router-dom';

export default function SignIn() {

  return (
    <>
      <section>
        <h2>Sign In</h2>
        <div>
          <img src={process.env.PUBLIC_URL + '/park_image1.jpg'} alt="melbourne google map" style={{ width: '100%' }} />
          {/* <form onSubmit={handleSubmit}> */}
          <form>
            <div>
              <label>
                Username
              </label>
              <input
                id="username"
                // value={username}
                // onChange={(e) => setUsername(e.currentTarget.value)}
              />
              <label>
                Email
              </label>
              <input
                id="email"
                // value={email}
                // onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <button type="submit" className="primary">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </section>
      <h2><Link to="/signup">Create an account</Link></h2>
    </>
  )
}
