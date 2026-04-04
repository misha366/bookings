import { type ReactNode } from 'react';

import { TRAINING_TYPES, TRAINERS, LOCATIONS } from '../../mock/filters';
import { setTrainingType, setTrainer, setLocation } from '../../store/filtersSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Select } from '../Select';

import './CalendarSidebar.sass';

export const CalendarSidebar = (): ReactNode => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);

  return (
    <aside className="calendar-sidebar">
      <div className="calendar-sidebar__section sidebar-filters">
        <h5 className="sidebar-filters__title">Filters</h5>
        <div className="sidebar-filters__content">
          <Select
            caption="Training Type"
            options={TRAINING_TYPES}
            placeholder="All types"
            value={filters.trainingType ?? ''}
            onChange={(value) => dispatch(setTrainingType(value || null))}
          />
          <Select
            caption="Trainer"
            options={TRAINERS}
            placeholder="All trainers"
            value={filters.trainer ?? ''}
            onChange={(value) => dispatch(setTrainer(value || null))}
          />
          <Select
            caption="Location"
            options={LOCATIONS}
            placeholder="All locations"
            value={filters.location ?? ''}
            onChange={(value) => dispatch(setLocation(value || null))}
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
