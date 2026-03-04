import { type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { Logo } from '../Logo';

import './Header.sass';

export function Header(): ReactNode {
  return (
    <header className="header">
      <Logo />

      <nav className="header__nav">
        <NavLink to="/calendar" className="header__link">Calendar</NavLink>
        <NavLink to="/my-bookings" className="header__link">My Bookings</NavLink>
        <NavLink to="/trainers" className="header__link">Trainers</NavLink>
      </nav>

      <div className="header__search">
        <input type="text" className="header__search-input" placeholder="Search..." />
      </div>

      <div className="header__notifications">
        notifications
      </div>

      <div className="header__account-dropdown">
        account
      </div>
    </header>
  );
}
