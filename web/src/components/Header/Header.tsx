import { type ReactNode, useState } from 'react';

import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { Link, NavLink } from 'react-router-dom';

import avatarMock from '../../assets/icons/avatar-mock.jpg';
import iconChevronDown from '../../assets/icons/icon-chevron-down.svg';
import iconClose from '../../assets/icons/icon-close.svg';
import iconNotifications from '../../assets/icons/icon-notifications.svg';
import { Logo } from '../Logo';
import { SearchField } from '../SearchField';

import './Header.sass';

type Notification = {
  id: string;
  title: string;
  time: string;
  isRead: boolean;
};

const mockNotifications: Notification[] = [
  { id: '1', title: 'New booking confirmed', time: '2 hours ago', isRead: false },
  { id: '2', title: 'Session reminder: Yoga class', time: '5 hours ago', isRead: false },
  { id: '3', title: 'Trainer left a review', time: '1 day ago', isRead: true },
];

export const Header = (): ReactNode => {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

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
        <SearchField />

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
