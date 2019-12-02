import React from 'react';
import { Link } from 'react-router-dom';
import logoBlack from '../assets/images/logo_black.svg';

const SignInPage = () => (
  <main className="f-centered ">
    <div className="f-container is-rounded">
      <div className="f-logo">
        <img src={logoBlack} alt="logo" />
      </div>
      <form className="v-form" method="POST">
        <header>
          <h3 className="f-title">Property-Pro Lite</h3>
        </header>
        <label htmlFor="username">
          Username
          <input type="text" name="username" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" />
        </label>
        <Link className="btn-action is-centered" to="/signin">
          Login &nbsp;
          <i className="fas fa-sign-in-alt" />
        </Link>
        <p>
          You don&apos;t have an account?
          <Link to="/signup">
            <i className="fas fa-user-plus" />
            Sign Up
          </Link>
          |
          <a href="passwordReset.html">
            <i className="fas fa-lock" />
            forgot pasword?
          </a>
        </p>
      </form>
    </div>
  </main>
);

export default SignInPage;
