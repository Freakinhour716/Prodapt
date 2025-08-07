// // function Login() {
// //   return (
// //     <div>           
// //         <h1>Login Page</h1>

// //         <form>          
// //             <label>
// //                 Username:
// //                 <input type="text" name="username" />   
// //             </label>    
// //             <br />  
// //             <label> 
// //                 Password:

// //                 <input type="password" name="password" />
// //             </label>
// //             <br />
// //             <button type="submit">Login</button>
// //         </form>
// //     </div>
// //   );
// // }
// // export default Login;


// import React from 'react';
// import './Login.css'; // Make sure to import the CSS file

// function Login() {
//   return (
//     <div className="login-background">
//       <div className="login-container">
//         <h1>Login</h1>
//         <form>
//           <label htmlFor="username">Username</label>
//           <input type="text" id="username" name="username" placeholder="Enter your username" />

//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" name="password" placeholder="Enter your password" />

//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-wrapper">
      <div className="split left">
        <img src="https://media.tenor.com/FtappBZ8dRkAAAAM/salaar-cease-fire.gif" alt="Left Background" />
      </div>
      <div className="split right">
        <img src="https://media.tenor.com/Y6TrzMlLHjIAAAAM/prabhas-cool.gif" alt="Right Background" />
      </div>

      <div className="login-container">
        <h1>Login</h1>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
