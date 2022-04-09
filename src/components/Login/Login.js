import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <div className="input-group">
        <h1 className="form-title">Login</h1>
<form action="">
<label htmlFor="email">Email</label>
        <input type="email" name="email" id="" />

        <div className="input-group">
          <label htmlFor="Password">Password</label>
          <input type="password" name="password" id="" />
        </div>
        <input className="form-submit" type="submit" value="Login" />
</form>
<p>

    new to Ema-John ? <Link className="form-link" to="/signup">Create an account</Link>
</p>
      </div>
    </div>
  );
};

export default Login;
