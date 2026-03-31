import { type ReactNode, useCallback, useMemo, useState } from 'react';

import { MyBookingItem } from '../../components/MyBookingItem';
import { MOCK_BOOKINGS } from '../../mock/bookings';
import type { MyBookingsFilter } from '../../types';

import './MyBookings.sass';

// { id: number; trainer: string; status: 'confirmed' | 'pending' | 'cancelled'; ... }
type Booking = (typeof MOCK_BOOKINGS)[number];

const getBookingFilterType = ({ status, start }: Booking): MyBookingsFilter => {
  if (status === 'cancelled') return 'canceled';
  if (start > new Date()) return 'upcoming';
  return 'past';
};

export const MyBookings = (): ReactNode => {
  const [activeFilter, setActiveFilter] = useState<MyBookingsFilter>('upcoming');

  const bookingCounts = useMemo(() => {
    const result: Record<MyBookingsFilter, number> = { upcoming: 0, past: 0, canceled: 0 };
    MOCK_BOOKINGS.forEach((b) => result[getBookingFilterType(b)]++);
    return result;
  }, []); // [bookings]

  const filteredBookings = useMemo(
    () => MOCK_BOOKINGS.filter((b) => getBookingFilterType(b) === activeFilter),
    [activeFilter] // [activeFilter, bookings]
  );

  const handleAddToCalendar = useCallback((id: number) => {
    console.log('Add to calendar:', id);
  }, []);

  const handleCancel = useCallback((id: number) => {
    console.log('Cancel:', id);
  }, []);

  return (
    <div className="my-bookings">
      <div className="my-bookings__content container">
        <h1 className="my-bookings__title">My Bookings</h1>
        <p className="my-bookings__subtitle">Manage your upcoming and past training sessions</p>

        <div className="my-bookings__tabs filter-tabs">
          <button
            type="button"
            className={`filter-tabs__button ${activeFilter === 'upcoming' ? 'filter-tabs__button_active' : ''}`}
            onClick={() => setActiveFilter('upcoming')}
          >
            Upcoming
            <span className={`filter-tabs__count ${activeFilter === 'upcoming' ? 'filter-tabs__count_active' : ''}`}>
              {bookingCounts.upcoming}
            </span>
          </button>
          <button
            type="button"
            className={`filter-tabs__button ${activeFilter === 'past' ? 'filter-tabs__button_active' : ''}`}
            onClick={() => setActiveFilter('past')}
          >
            Past
            <span className={`filter-tabs__count ${activeFilter === 'past' ? 'filter-tabs__count_active' : ''}`}>
              {bookingCounts.past}
            </span>
          </button>
          <button
            type="button"
            className={`filter-tabs__button ${activeFilter === 'canceled' ? 'filter-tabs__button_active' : ''}`}
            onClick={() => setActiveFilter('canceled')}
          >
            Canceled
            <span className={`filter-tabs__count ${activeFilter === 'canceled' ? 'filter-tabs__count_active' : ''}`}>
              {bookingCounts.canceled}
            </span>
          </button>
        </div>

        <div className="my-bookings__list booking-list">
          {filteredBookings.map((booking) => (
            <MyBookingItem
              key={booking.id}
              id={booking.id}
              trainer={booking.trainer}
              status={booking.status}
              start={booking.start}
              end={booking.end}
              location={booking.location}
              participationType={booking.participationType}
              participants={booking.participants}
              capacity={booking.capacity}
              activeFilter={activeFilter}
              onAddToCalendar={handleAddToCalendar}
              onCancel={handleCancel}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
