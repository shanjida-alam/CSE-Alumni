import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="loginContainer">
      <div class="login-info">
        <form action="">
          <h1>Login</h1>
          <div class="input-box">
            <input type="text" placeholder="Username or email" required />
            <i class="bx bxs-user"></i>
          </div>
          <div class="input-box">
            <input type="password" placeholder="Password" required />
            <i class="bx bxs-lock-alt"></i>
          </div>
          <div class="remember-forget">
            <label for="">
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="#">Forget Password</a>
          </div>
          <button type="submit" class="btn login-btn">
            Login
          </button>
          <div class="register-link register-content">
            <p>
              Don't have an account?
              <Link to="/registration"  className=" underline">
              Register
              </Link>
            </p>
          </div>
          <button type="submit" class="btn">
            Back
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
