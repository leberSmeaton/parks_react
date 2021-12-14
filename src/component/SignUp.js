import React from 'react'
import {Link} from 'react-router-dom';

export default function SignUp() {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [password_confirmation, setPasswordConfirmation] = useState("");
  return (
    <>
      <section>
        <h2>Sign Up</h2>
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
              <label>
                Password
              </label>
              <input
                id="password"
                // value={password}
                // onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <label>
                Password Confirmation
              </label>
              <input
                id="password_confirmation"
                // value={password_confirmation}
                // onChange={(e) => setPassword(e.currentTarget.value)}
              />
              <button type="submit" className="primary">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </section>
      <h2><Link to="/signin">Already Signed Up? Click here.</Link></h2>
    </>
  )
}
