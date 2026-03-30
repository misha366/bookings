import { memo, type ReactNode } from 'react';

import addCalendarIcon from '../../assets/icons/icon-add-calendar.svg';
import calendarIcon from '../../assets/icons/icon-calendar.svg';
import cancelIcon from '../../assets/icons/icon-cancel.svg';
import groupIcon from '../../assets/icons/icon-group.svg';
import locationIcon from '../../assets/icons/icon-location.svg';
import personIcon from '../../assets/icons/icon-person.svg';
import timeIcon from '../../assets/icons/icon-time.svg';
import trainerPhoto from '../../assets/images/trainer.png';
import { formatDate, formatTime } from '../../common';
import type { CalendarEventDetails, MyBookingsFilter } from '../../types';

import './MyBookingItem.sass';

type BookingStatus = 'pending' | 'confirmed' | 'cancelled';

type MyBookingItemProps = Omit<CalendarEventDetails, 'title' | 'availability'> & {
  id: number;
  status: BookingStatus;
  activeFilter: MyBookingsFilter;
  onAddToCalendar: (id: number) => void;
  onCancel: (id: number) => void;
};

const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  month: 'short',
  day: 'numeric',
  year: 'numeric',
};

const TIME_OPTIONS: Intl.DateTimeFormatOptions = {
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
};

export const MyBookingItem = memo(({
  id,
  trainer,
  status,
  start,
  end,
  location,
  participationType,
  participants,
  capacity,
  activeFilter,
  onAddToCalendar,
  onCancel,
}: MyBookingItemProps): ReactNode => {
  const areActionsDisabled = activeFilter !== 'upcoming';

  return (
    <div className="my-booking-item">
      <div className="my-booking-item__content item-content">
        <div className="item-content__main booking-main">
          <img src={trainerPhoto} alt={trainer} className="booking-main__photo" />
          <div className="booking-main__info">
            <div className="booking-main__header">
              <span className="booking-main__name">{trainer}</span>
              <span className={`booking-main__status booking-main__status_${status}`}>
                {status}
              </span>
            </div>
            <span className="booking-caption">
              <img src={calendarIcon} alt="" className="booking-caption__icon" />
              {formatDate({ date: start, options: DATE_OPTIONS })}
            </span>
            <span className="booking-caption">
              <img src={locationIcon} alt="" className="booking-caption__icon" />
              {location}
            </span>
          </div>
        </div>
        <div className="item-content__session booking-session">
          <span className="booking-caption">
            <img src={timeIcon} alt="" className="booking-caption__icon" />
            {formatTime({ date: start, options: TIME_OPTIONS })} - {formatTime({ date: end, options: TIME_OPTIONS })}
          </span>
          <span className="booking-caption">
            <img
              src={participationType === 'Group' ? groupIcon : personIcon}
              alt=""
              className="booking-caption__icon"
            />
            {participationType === 'Group'
              ? `Group Session • ${participants}/${capacity} spots`
              : 'Individual Session'}
          </span>
        </div>
        <div className="item-content__actions booking-actions">
          <button type="button" className="booking-actions__button button button-secondary" onClick={() => onAddToCalendar(id)} disabled={areActionsDisabled}>
            <img src={addCalendarIcon} alt="" className="booking-actions__icon" />
            Add to Calendar
          </button>
          <button type="button" className="booking-actions__button button button-cancel" onClick={() => onCancel(id)} disabled={areActionsDisabled}>
            <img src={cancelIcon} alt="" className="booking-actions__icon" />
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
});
