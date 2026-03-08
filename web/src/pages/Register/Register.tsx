import { type ReactNode } from 'react';

import { Link } from 'react-router-dom';

import './Register.sass';

export const Register = (): ReactNode => {
  return (
    <div className="register">
      <h1 className="register__title">Register</h1>
      <form className="register__form register-form">
        <label className="register-form__label">Name</label>
        <input
          type="text"
          className="register-form__input"
          placeholder="Enter your name"
        />
        <label className="register-form__label">Email</label>
        <input
          type="email"
          className="register-form__input"
          placeholder="Enter your email"
        />
        <label className="register-form__label">Password</label>
        <input
          type="password"
          className="register-form__input"
          placeholder="Enter your password"
        />
        <label className="register-form__label">Confirm Password</label>
        <input
          type="password"
          className="register-form__input"
          placeholder="Confirm your password"
        />
        <button type="submit" className="register-form__submit">Register</button>
      </form>
      <p className="register__login">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
