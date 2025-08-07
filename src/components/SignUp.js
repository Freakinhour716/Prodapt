/*function SignUp() {
  return (
    <div>
        <h1>Sign Up Page</h1>   
        <form>
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <br />      
            <label>
                Password:
                <input type="password" name="password" />       
            </label>
            <br />
            <button type="submit">Sign Up</button>
        </form>
    </div>
  );
}
export default SignUp;
*/

import React from 'react';
import './SignUp.css'; // Make sure this CSS file exists

function SignUp() {
  return (
    <div className="signup-wrapper">
      <div className="split left">
     <img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" alt="Left Background" />
      </div>
      <div className="split right">
        <img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" alt="Right Background" />
      </div>

      <div className="signup-container">
        <h1>Sign Up</h1>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Choose a username" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Create a password" />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
