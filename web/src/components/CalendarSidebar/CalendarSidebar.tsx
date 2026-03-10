import { type ReactNode } from 'react';

import { Select } from '../Select';

import './CalendarSidebar.sass';

const mockTrainingTypes = [
  { id: '1', value: 'personal', label: 'Personal Training' },
  { id: '2', value: 'group', label: 'Group Training' },
  { id: '3', value: 'yoga', label: 'Yoga' },
];

const mockTrainers = [
  { id: '1', value: '1', label: 'John Smith' },
  { id: '2', value: '2', label: 'Sarah Johnson' },
  { id: '3', value: '3', label: 'Mike Wilson' },
];

const mockLocations = [
  { id: '1', value: 'main', label: 'Main Gym' },
  { id: '2', value: 'studio', label: 'Studio A' },
  { id: '3', value: 'outdoor', label: 'Outdoor Area' },
];

export const CalendarSidebar = (): ReactNode => {
  return (
    <aside className="calendar-sidebar">
      <div className="calendar-sidebar__section sidebar-filters">
        <h5 className="sidebar-filters__title">Filters</h5>
        <div className="sidebar-filters__content">
          <Select
            caption="Training Type"
            options={mockTrainingTypes}
            placeholder="All types"
          />
          <Select
            caption="Trainer"
            options={mockTrainers}
            placeholder="All trainers"
          />
          <Select
            caption="Location"
            options={mockLocations}
            placeholder="All locations"
          />
        </div>
      </div>

      <div className="calendar-sidebar__section sidebar-availability">
        <h5 className="sidebar-availability__title">Availability</h5>
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
