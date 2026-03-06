import { type ReactNode } from 'react';

import './MyBookingsSidebar.sass';

export function MyBookingsSidebar(): ReactNode {
  return (
    <aside className="my-bookings-sidebar">
      <div className="my-bookings-sidebar__section sidebar-filters">
        <h3 className="sidebar-filters__title">Filters</h3>
        <div className="sidebar-filters__content">
          <select className="sidebar-filters__select">
            <option value="">Training Type</option>
            <option value="personal">Personal Training</option>
            <option value="group">Group Training</option>
            <option value="yoga">Yoga</option>
          </select>

          <select className="sidebar-filters__select">
            <option value="">Trainer</option>
            <option value="1">John Smith</option>
            <option value="2">Sarah Johnson</option>
            <option value="3">Mike Wilson</option>
          </select>

          <select className="sidebar-filters__select">
            <option value="">Location</option>
            <option value="main">Main Gym</option>
            <option value="studio">Studio A</option>
            <option value="outdoor">Outdoor Area</option>
          </select>
        </div>
      </div>

      <div className="my-bookings-sidebar__section sidebar-availability">
        <h3 className="sidebar-availability__title">Availability Info</h3>
        <ul className="sidebar-availability__list">
          <li className="sidebar-availability__item sidebar-availability__item_available">Available</li>
          <li className="sidebar-availability__item sidebar-availability__item_low">Low availability</li>
          <li className="sidebar-availability__item sidebar-availability__item_full">Full</li>
          <li className="sidebar-availability__item sidebar-availability__item_canceled">Canceled</li>
        </ul>
      </div>
    </aside>
  );
}
