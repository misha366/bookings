import { type ReactNode, useState } from 'react';

import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { Link, NavLink } from 'react-router-dom';

import avatarMock from '../../assets/icons/avatar-mock.jpg';
import iconChevronDown from '../../assets/icons/icon-chevron-down.svg';
import iconClose from '../../assets/icons/icon-close.svg';
import iconNotifications from '../../assets/icons/icon-notifications.svg';
import iconSearch from '../../assets/icons/icon-search.svg';
import { Logo } from '../Logo';

import './Header.sass';

type Notification = {
  id: string;
  title: string;
  time: string;
  isRead: boolean;
};

type SearchResult = {
  id: string;
  type: 'trainer' | 'session';
  title: string;
  subtitle: string;
};

const mockNotifications: Notification[] = [
  { id: '1', title: 'New booking confirmed', time: '2 hours ago', isRead: false },
  { id: '2', title: 'Session reminder: Yoga class', time: '5 hours ago', isRead: false },
  { id: '3', title: 'Trainer left a review', time: '1 day ago', isRead: true },
];

const mockSearchResults: SearchResult[] = [
  { id: '1', type: 'trainer', title: 'John Smith', subtitle: 'Yoga, Pilates' },
  { id: '2', type: 'trainer', title: 'Emma Wilson', subtitle: 'CrossFit, HIIT' },
  { id: '3', type: 'session', title: 'Morning Yoga', subtitle: 'Tomorrow, 8:00 AM' },
  { id: '4', type: 'session', title: 'Evening HIIT', subtitle: 'Today, 6:00 PM' },
];

export const Header = (): ReactNode => {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const markAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  return (
    <header className="header">
      <Logo />

      <nav className="header__nav nav-menu">
        <NavLink to="/calendar" className="nav-menu__link">Calendar</NavLink>
        <NavLink to="/my-bookings" className="nav-menu__link">My Bookings</NavLink>
        <NavLink to="/trainers" className="nav-menu__link">Trainers</NavLink>
      </nav>

      <div className="header__actions toolbar">
        <div className="toolbar__search search-field">
          <img src={iconSearch} alt="" className="search-field__icon" />
          <input
            type="text"
            className="search-field__input"
            placeholder="Search trainers, sessions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchOpen(true)}
            onBlur={() => setIsSearchOpen(false)}
          />
          {isSearchOpen && (
            <div className="search-field__dropdown dropdown-panel">
              <div className="dropdown-panel__content">
                {mockSearchResults.map((result) => (
                  <Link key={result.id} to={`/${result.type}s/${result.id}`} className="dropdown-panel__item search-result">
                    <span className="search-result__type">{result.type}</span>
                    <span className="search-result__title">{result.title}</span>
                    <span className="search-result__subtitle">{result.subtitle}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <Menu as="div" className="toolbar__notifications notifications-dropdown">
          {({ close }) => (
            <>
              <MenuButton className="notifications-dropdown__button">
                <img src={iconNotifications} alt="Notifications" />
                {unreadCount > 0 && <span className="notifications-dropdown__badge">{unreadCount}</span>}
              </MenuButton>
              <MenuItems className="notifications-dropdown__menu dropdown-panel" modal={false}>
                <div className="dropdown-panel__header">
                  <span className="dropdown-panel__title">Notifications</span>
                  <button className="dropdown-panel__close" onClick={close}>
                    <img src={iconClose} alt="Close" />
                  </button>
                </div>
                <div className="dropdown-panel__content">
                  {notifications.map((notification) => (
                    <MenuItem key={notification.id}>
                      <Link
                        to={`/notifications/${notification.id}`}
                        className={`dropdown-panel__item notification-item ${!notification.isRead ? 'notification-item_unread' : ''}`}
                        onClick={() => markAsRead(notification.id)}
                      >
                        <span className="notification-item__title">{notification.title}</span>
                        <span className="notification-item__time">{notification.time}</span>
                      </Link>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </>
          )}
        </Menu>

        <Menu as="div" className="toolbar__account account-dropdown">
          {({ close }) => (
            <>
              <MenuButton className="account-dropdown__button account">
                <img src={avatarMock} alt="" className="account__avatar" />
                <span className="account__name">Sarah Chenington-Williams</span>
                <img src={iconChevronDown} alt="" className="account__chevron" />
              </MenuButton>
              <MenuItems className="account-dropdown__menu dropdown-panel" modal={false}>
                <div className="dropdown-panel__header">
                  <span className="dropdown-panel__title">Account</span>
                  <button className="dropdown-panel__close" onClick={close}>
                    <img src={iconClose} alt="Close" />
                  </button>
                </div>
                <MenuItem>
                  <Link to="/profile" className="dropdown-panel__item">Profile</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/settings" className="dropdown-panel__item">Settings</Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/logout" className="dropdown-panel__item">Logout</Link>
                </MenuItem>
              </MenuItems>
            </>
          )}
        </Menu>
      </div>
    </header>
  );
}
