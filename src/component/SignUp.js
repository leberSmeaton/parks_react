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
        <div className='sign-container'>
          <img className='park-img' src={process.env.PUBLIC_URL + '/park_image1.jpg'} alt="melbourne google map" />
          {/* <form onSubmit={handleSubmit}> */}
          <form>
            <div className='sign-in-form'>
              <label>
                Username
                <input
                  id="username"
                  // value={username}
                  // onChange={(e) => setUsername(e.currentTarget.value)}
                />
              </label>
              <label>
                Email
                <input
                  id="email"
                  // value={email}
                  // onChange={(e) => setEmail(e.currentTarget.value)}
                />
              </label>
              <br />
              <label>
                User Icon
                <input
                  type="file"
                  id="icon"
                  // value={icon}
                  // onChange={(e) => setIcon(e.currentTarget.value)}
                />
              </label>
              <label>
                Password
                <input
                  id="password"
                  // value={password}
                  // onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </label>
              <label>
                Password Confirmation
                <input
                  id="password_confirmation"
                  // value={password_confirmation}
                  // onChange={(e) => setPassword(e.currentTarget.value)}
                />
              </label>
              <div className='buttons'>
                <div>
                  <button class='bg-green-800'  type="submit">
                  Sign In
                  </button>
                </div>
                <div>
                  <button><Link to="/signin">Already Signed Up? Click here.</Link></button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
