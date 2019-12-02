import React from 'react';
import { Link } from 'react-router-dom';
import logoBlack from '../assets/images/logo_black.svg';

const SignUpPage = () => (
  <main className="f-centered ">
    <div className="f-container is-rounded">
      <div className="f-logo">
        <img src={logoBlack} alt="logo" />
      </div>
      <form className="v-form" method="POST">
        <header>
          <h3 className="f-title">Property-Pro Lite</h3>
        </header>
        <label htmlFor="email">
          Email
          <input type="email" name="email" required />
        </label>
        <label htmlFor="firstname">
          Firstname
          <input type="text" name="firstname" required />
        </label>
        <label htmlFor="lastname">
          Lastname
          <input type="text" name="lastname" required />
        </label>
        <label htmlFor="phoneNumber">
          Phone Number
          <input type="text" name="phoneNumber" />
        </label>
        <label htmlFor="address">
          Address
          <input type="text" name="address" required />
        </label>
        <label htmlFor="username">
          Username
          <input type="text" name="username" required />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" required />
        </label>
        <label htmlFor="confirmPassword">
          Confirm password
          <input type="password" name="confirmPassword" required />
        </label>
        <select name="user_type" className="select f-padding">
          <option value="" selected disabled="">Select user type</option>
          <option value="admin">Agent</option>
          <option value="user">User</option>
        </select>
        <Link className="btn-action is-centered" name="login" to="/signin">Create account</Link>
        <p>
          Already have an account?
          <Link to="/signin">
            <i className="fas fa-sign-in-alt" />
            Sign in
          </Link>
        </p>
      </form>
    </div>
  </main>
);

export default SignUpPage;
